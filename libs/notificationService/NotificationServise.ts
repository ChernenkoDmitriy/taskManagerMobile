import { ILinks } from "../../src/config";
import { FirebaseMessaging, IMessaging } from "./firebase";
import notificationHandler from "./pushNotification/NotificationHandler";
import { NotificationAxiosRequester } from "./requester";
import { ISendRegisterToken } from "./_ports/ISendRegisterToken";
import { ISendDeleteToken } from "./_ports/ISendDeleteToken";

export interface INotificationService {
    register: (userId: string, language: string) => Promise<void>;
    deleteToken: (token: string) => Promise<void>;
    subscribe: () => void;
}

export class NotificationService implements INotificationService {
    private static instance: NotificationService;

    _notificationHandler = notificationHandler;
    _messaging!: IMessaging;
    _requester!: ISendRegisterToken & ISendDeleteToken;

    constructor(private links: ILinks) {
        if (NotificationService.instance) {
            return NotificationService.instance;
        }
        this._requester = new NotificationAxiosRequester(this.links);
        this._messaging = new FirebaseMessaging();
        NotificationService.instance = this;
    }

    register = async (userId: string, language: string) => {
        if (userId && language && this._requester?.registerToken) {
            await this._messaging.registerAppWithFCM();
            const token = await this._messaging.getFCMToken();
            const response = await this._requester.registerToken(userId, token, language);
            console.log('NotificationService -> register -> response: ', response);
        }
    }

    deleteToken = async (token: string) => {
        if (token && this._requester?.deleteToken) {
            await this._messaging.removeFCMToken();
            const response = await this._requester.deleteToken(token);
            console.log('NotificationService -> deleteToken -> response: ', response);
        }
    }

    subscribe = () => {
        this._messaging?.subscribeAppWithFCM(this.onReceiveNotification);
    }

    private onReceiveNotification = (notification: any, _type: string) => {
        try {
            if (notification) {
                const { title, body } = notification?.data;
                this._notificationHandler.createLocalNotification(title, body, notification?.data);
            };
        } catch (error) {
            console.warn('NotificationService -> onReceiveNotification: ', error);
        }
    }

}
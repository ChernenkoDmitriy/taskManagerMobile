import Axios from "axios";
import { ILinks } from "../../../src/config";
import { ISendRegisterToken } from "../_ports/ISendRegisterToken";
import { ISendDeleteToken } from "../_ports/ISendDeleteToken";

export class NotificationAxiosRequester implements ISendRegisterToken, ISendDeleteToken {
    private static instance: NotificationAxiosRequester;
    constructor(private links: ILinks) {
        if (NotificationAxiosRequester.instance) {
            return NotificationAxiosRequester.instance;
        }
        NotificationAxiosRequester.instance = this;
    }

    registerToken = async (userId: string, token: string, language: string) => {
        try {
            const response = await this.post(this.links.LINKS.REGISTER_FCM_TOKEN, { userId, token, language });
            return response;
        } catch (error) {
            console.warn('NotificationAxiosRequester -> registerToken: ', error.message);
            return null;
        }
    }

    deleteToken = async (token: string) => {
        try {
            const response = await this.post(this.links.LINKS.REGISTER_FCM_TOKEN, { token });
            return response;
        } catch (error) {
            console.warn('NotificationAxiosRequester -> deleteToken: ', error.message);
            return null;
        }
    }

    private post = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'POST',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            data && (config.data = JSON.stringify(data));
            const response = await Axios(config);
            return response;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.warn('NotificationAxiosRequester -> post: ', error.message);
            return error?.response?.data || error;
        }
    }

}

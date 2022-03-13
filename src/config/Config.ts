import config from './configs.json'
import { ILinks, IConfig } from ".";
import { IRegex } from './IConfig/IRegex';

export class Config implements IConfig {
    private static instance: Config;
    private _links = config.LINKS;
    private _storageServices = config.STORAGE_SERVICES;
    private _regex: IRegex = {
        emailRegExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        passwordRegExp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        nameRegExp: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    };

    constructor() {
        if (Config.instance) {
            return Config.instance;
        }
        Config.instance = this;
    }

    get REGEX() {
        return this._regex;
    }

    get LINKS() {
        return LINKS_MOCK;
        // return this._links;
    }

    get STORAGE_SERVICES() {
        return this._storageServices;
    }

    setLinks = (links: ILinks) => {
        if (typeof links === 'object' && links) {
            Object.keys(links).forEach((key) => {
                //@ts-ignore
                this._links[key] = links[key];
            });
        }
    }

}

const LINKS_MOCK = {
    // "REGISTER_FCM_TOKEN": "http://192.168.10.26:3000/register-fcm-token",
    // "UPDATE_FCM_TOKEN": "http://192.168.10.26:3000/update-fcm-token",
    // "DELETE_FCM_TOKEN": "http://192.168.10.26:3000/delete-fcm-token",
    // "SOCKET": "http://192.168.10.26:3000/",
    // "AUTHORIZATION": "http://192.168.10.26:3000/authorization",
    // "REGISTRATION": "http://192.168.10.26:3000/registration",
    // "FIND_USERS": "http://192.168.10.26:3000/find-users",

    "REGISTER_FCM_TOKEN": "http://localhost:3000/register-fcm-token",
    "UPDATE_FCM_TOKEN": "http://localhost:3000/update-fcm-token",
    "DELETE_FCM_TOKEN": "http://localhost:3000/delete-fcm-token",
    "SOCKET": "http://localhost:3000/",
    "AUTHORIZATION": "http://localhost:3000/authorization",
    "REGISTRATION": "http://localhost:3000/registration",
    "FIND_USERS": "http://localhost:3000/find-users",
    "CREATE_ROOM": "http://localhost:3000/create-room",
    "GET_USER_ROOMS": "http://localhost:3000/get-user-rooms",
    "CREATE_NOTE": "http://localhost:3000/create-note",
    "DELETE_NOTE": "http://localhost:3000/delete-note",
    "GET_NOTES": "http://localhost:3000/get-notes",
    "UPDATE_NOTES": "http://localhost:3000/update-note"
};
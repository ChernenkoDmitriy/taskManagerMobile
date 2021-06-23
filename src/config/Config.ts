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
        return this._links;
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

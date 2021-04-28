import config from './configs.json'
import { IStoreServices, ILinks, IConfig } from ".";

export class Config implements IConfig {
    private static instance: Config;
    private _links: ILinks = config.LINKS;
    private _storageServices: IStoreServices = config.STORAGE_SERVICES;

    constructor() {
        if (Config.instance) {
            return Config.instance;
        }
        Config.instance = this;
    }

    get LINKS() {
        return { ...this._links };
    }

    get STORAGE_SERVICES() {
        return { ...this._storageServices };
    }

    setLinks = (links: ILinks) => {
        if (typeof links === 'object' && links) {
            this._links = links;
        }
    }

}

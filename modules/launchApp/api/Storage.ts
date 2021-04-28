import { IStorage } from "../../../libs/storage";
import { IColors } from "../../../src/colorTheme";
import { IStoreServices } from "../../../src/config";

export interface IReadTheme {
    readTheme: () => Promise<string | null>;
    readAllTheme: () => Promise<{ [key: string]: IColors; } | null>;
}

export interface IReadLocale {
    readLocalization: () => Promise<string | null>;
    readTranslation: () => Promise<object | null>;
}

export class LaunchAppStorage implements IReadLocale, IReadTheme {
    constructor(
        private services: IStoreServices,
        private storage: IStorage,
    ) { }

    readLocalization = async () => {
        const data = await this.storage.get(this.services.LOCALIZATION);
        return data;
    }

    readTheme = async () => {
        const data = await this.storage.get(this.services.THEME);
        return data;
    }

    readTranslation = async () => {
        const data = await this.storage.get(this.services.TRANSLATION);
        return data;
    }

    readAllTheme = async () => {
        const data = await this.storage.get(this.services.ALL_THEMES);
        return data;
    }

}

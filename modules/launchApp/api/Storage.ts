import { IStorage } from "../../../libs/storage";
import { IColors } from "../../../src/colorTheme";
import { IStorageServices } from "../../../src/config";
import { INote } from "../../common/models/INote";

export interface IReadTheme {
    readTheme: () => Promise<string | null>;
    readAllTheme: () => Promise<{ [key: string]: IColors; } | null>;
}

export interface IReadLocale {
    readLocalization: () => Promise<string | null>;
    readTranslation: () => Promise<object | null>;
}

export interface IReadNotesTasksRooms {
    readNotesTasksTeams: () => Promise<{ notes: INote[] | null, tasks: null, rooms: null }>;
}

export class LaunchAppStorage implements IReadLocale, IReadTheme, IReadNotesTasksRooms {
    constructor(
        private services: IStorageServices,
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

    readNotesTasksTeams = async () => {
        const tasks = null;
        const rooms = null;
        const notes = await this.storage.get(this.services.NOTES);
        return { notes, tasks, rooms };
    }

}

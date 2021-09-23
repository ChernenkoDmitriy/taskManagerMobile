import { IStorage } from "../../../libs/storage";
import { IStorageServices } from "../../../src/config";
import { INote } from "../../common/models/ISmartTask";
import { IReadLocale } from "../useCases/_ports/IReadLocalizationFromStorage";
import { IReadThemeFromStorage } from "../useCases/_ports/IReadThemeFromStorage";
import { IReadUserFromStore } from "../useCases/_ports/IReadUserFromStorage";

export interface IReadNotesTasksRooms {
    readNotesTasksTeams: () => Promise<{ notes: INote[] | null, tasks: null, rooms: null }>;
}

export class LaunchAppStorage implements IReadLocale, IReadThemeFromStorage, IReadNotesTasksRooms, IReadUserFromStore {
    constructor(
        private services: IStorageServices,
        private storage: IStorage,
    ) { }

    readUser = async ()=>{
        const data = await this.storage.get(this.services.STORAGE_SERVICES.USER);
        return data;
    }

    readLocalization = async () => {
        const data = await this.storage.get(this.services.STORAGE_SERVICES.LOCALIZATION);
        return data;
    }

    readTheme = async () => {
        const data = await this.storage.get(this.services.STORAGE_SERVICES.THEME);
        return data;
    }

    readTranslation = async () => {
        const data = await this.storage.get(this.services.STORAGE_SERVICES.TRANSLATION);
        return data;
    }

    readAllTheme = async () => {
        const data = await this.storage.get(this.services.STORAGE_SERVICES.ALL_THEMES);
        return data;
    }

    readNotesTasksTeams = async () => {
        const tasks = null;
        const rooms = null;
        const notes = await this.storage.get(this.services.STORAGE_SERVICES.NOTES);
        return { notes, tasks, rooms };
    }

}

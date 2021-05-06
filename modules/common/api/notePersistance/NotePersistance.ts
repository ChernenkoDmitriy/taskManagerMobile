import { IStorageSet } from "../../../../libs/storage";
import { IStorageServices } from "../../../../src/config";
import { INote } from "../../models/INote";
import { IRepository } from "../../repository/IRepository";
import { INotePersistance } from "./INotePersistance";

export class NotePersistance implements INotePersistance {
    constructor(
        private storage: IStorageSet,
        private storageServices: IStorageServices,
        private notesStore: IRepository<INote[]>
    ) { }

    save = async (notes: INote[]) => {
        try {
            await this.storage.set(this.storageServices.NOTES, notes);
            this.notesStore.save(notes);
        } catch (error) {
            console.warn('NoteStorage -> save: ', error);
        }
    }

}

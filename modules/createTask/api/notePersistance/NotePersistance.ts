import { IStorageSet } from "../../../../libs/storage";
import { IStorageServices } from "../../../../src/config";
import { INote } from "../../../common/models/INote";
import { IRepository } from "../../../common/repository/IRepository";
import { INotePersistance } from "../../useCases/CreateNoteUseCase/_ports/INotePersistance";

export class NotePersistance implements INotePersistance {
    constructor(
        private storage: IStorageSet,
        private storageServices: IStorageServices,
        private notesStore: IRepository<INote[]>
    ) { }

    save = async (note: INote) => {
        try {
            const oldNotes = this.notesStore.data ?? [];
            const notes = [note, ...oldNotes];
            await this.storage.set(this.storageServices.NOTES, notes);
            this.notesStore.save(notes);
        } catch (error) {
            console.warn('NoteStorage -> save: ', error);
        }
    }

}

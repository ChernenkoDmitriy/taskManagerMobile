import { INotePersistance } from "../../api/smartTaskPersistance/ISmartTaskPersistance";
import { INote } from "../../../common/models/ISmartTask";
import { IRepository } from "../../../common/repository/IRepository";
import { IDeleteNote } from "./_ports/IDeleteNote";

export interface IDeleteNoteUseCase {
    delete: (uid: string) => Promise<void>;
}

export class DeleteNoteUseCase implements IDeleteNoteUseCase {
    constructor(
        private notesStore: IRepository<INote[]>,
        private noteHelper: IDeleteNote,
        private notePersistance: INotePersistance
    ) { }

    delete = async (uid: string) => {
        const notes = this.notesStore.data as INote[];
        const updatedNotes = this.noteHelper.deleteNote(notes, uid);
        await this.notePersistance.save(updatedNotes);
    }

}

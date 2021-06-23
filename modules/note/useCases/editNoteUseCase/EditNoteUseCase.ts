import { INotePersistance } from "../../api/notePersistance/INotePersistance";
import { INote } from "../../../common/models/INote";
import { IRepository } from "../../../common/repository/IRepository";
import { IEditNote } from "../changePointProgressUseCase/_ports/IEditNote";

export interface IEditNoteUseCase {
    editNote: () => Promise<void>;
}

export class EditNoteUseCase implements IEditNoteUseCase {
    constructor(
        private editedNoteStore: IRepository<INote>,
        private notesStore: IRepository<INote[]>,
        private noteHelper: IEditNote,
        private notePersistance: INotePersistance
    ) { }

    editNote = async () => {
        try {
            const note = this.editedNoteStore.data as INote;
            const oldNotes = this.notesStore.data as INote[];
            const updatedNotes = this.noteHelper.editNote(oldNotes, note);
            await this.notePersistance.save(updatedNotes);
        } catch (error) {
            console.warn('EditNoteUseCase -> editNote: ', error);
        }
    }

}

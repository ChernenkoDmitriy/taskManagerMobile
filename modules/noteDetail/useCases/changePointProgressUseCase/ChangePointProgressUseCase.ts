import { INotePersistance } from "../../../common/api/notePersistance/INotePersistance";
import { INote } from "../../../common/models/INote";
import { IRepository } from "../../../common/repository/IRepository";
import { IEditNote } from "./_ports/IEditNote";
import { IUpdateNotePointProgress } from "./_ports/IUpdateNotePointProgress";

export interface IChangePointProgressUseCase {
    update: (uid: string) => Promise<void>;
}

export class ChangePointProgressUseCase implements IChangePointProgressUseCase {
    constructor(
        private notesStore: IRepository<INote[]>,
        private chosenNoteStore: IRepository<INote>,
        private noteHelper: IUpdateNotePointProgress & IEditNote,
        private notePersistance: INotePersistance
    ) { }

    update = async (uid: string) => {
        const note = this.chosenNoteStore.data as INote;
        const notes = this.notesStore.data as INote[];
        const updatedNote = this.noteHelper.updateNotePointProgress(note, uid);
        const updatedNotes = this.noteHelper.editNote(notes, updatedNote);
        this.chosenNoteStore.save(updatedNote);
        await this.notePersistance.save(updatedNotes);
    }

}

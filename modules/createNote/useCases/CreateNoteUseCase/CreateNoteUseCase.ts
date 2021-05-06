import { INotePersistance } from "../../../common/api/notePersistance/INotePersistance";
import { INote, NotePoint } from "../../../common/models/INote";
import { IRepository } from "../../../common/repository/IRepository";
import { IAddNote } from "./_ports/IAddNote";
import { ICreateNote } from "./_ports/ICreateNote";

export interface ICreateNoteUseCase {
    createNote: (title: string, content: string, points: NotePoint[]) => Promise<void>;
}

export class CreateNoteUseCase implements ICreateNoteUseCase {
    constructor(
        private notesStore: IRepository<INote[]>,
        private noteHelper: ICreateNote & IAddNote,
        private notePersistance: INotePersistance
    ) { }

    createNote = async (title: string, content: string, points: NotePoint[]) => {
        const note = this.noteHelper.createNote(title, content, points);
        const oldNotes = this.notesStore.data as INote[];
        const updatedNotes = this.noteHelper.addNote(oldNotes, note);
        await this.notePersistance.save(updatedNotes);
    }

}

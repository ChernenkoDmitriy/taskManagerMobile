import { INotePersistance } from "../../api/notePersistance/INotePersistance";
import { INote, NotePoint, Priority } from "../../../common/models/INote";
import { IRepository } from "../../../common/repository/IRepository";
import { IAddNote } from "./_ports/IAddNote";
import { ICreateNote } from "./_ports/ICreateNote";

export interface ICreateNoteUseCase {
    createNote: (title: string, content: string, points: NotePoint[], priority: Priority) => Promise<void>;
}

export class CreateNoteUseCase implements ICreateNoteUseCase {
    constructor(
        private notesStore: IRepository<INote[]>,
        private noteHelper: ICreateNote & IAddNote,
        private notePersistance: INotePersistance
    ) { }

    createNote = async (title: string, content: string, points: NotePoint[], priority: Priority) => {
        const note = this.noteHelper.createNote(title, content, points, priority);
        const oldNotes = this.notesStore.data as INote[];
        const updatedNotes = this.noteHelper.addNote(oldNotes, note);
        await this.notePersistance.save(updatedNotes);
    }

}

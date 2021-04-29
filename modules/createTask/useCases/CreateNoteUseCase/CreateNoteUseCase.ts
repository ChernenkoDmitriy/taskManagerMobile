import { INoteCreator } from "./_ports/INoteCreator";
import { INotePersistance } from "./_ports/INotePersistance";

export interface ICreateNoteUseCase {
    createNote: (title: string, content: string) => Promise<void>;
}

export class CreateNoteUseCase implements ICreateNoteUseCase {
    constructor(
        private noteCreator: INoteCreator,
        private notePersistance: INotePersistance
    ) { }

    createNote = async (title: string, content: string) => {
        const note = this.noteCreator.create(title, content);
        await this.notePersistance.save(note);
    }

}

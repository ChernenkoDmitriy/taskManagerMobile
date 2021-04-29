import { INote } from "../../../common/models/INote";
import { INoteCreator } from "../../useCases/CreateNoteUseCase/_ports/INoteCreator";

export class NoteCreator implements INoteCreator {
    private static instance: NoteCreator;

    constructor() {
        if (NoteCreator.instance) {
            return NoteCreator.instance;
        }
        NoteCreator.instance = this;
    }

    create = (title: string, content: string) => {
        const id = String(Date.now());
        const note: INote = { title, content, id };
        return note;
    }

}

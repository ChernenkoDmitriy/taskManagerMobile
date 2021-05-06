import { INote } from "../../common/models/INote";
import { IRepository } from "../../common/repository/IRepository";

export interface INoteDetailState {
    readonly chosenNote: INote;
    setChosenNote: (data: INote | null) => void;
}

export class NoteDetailState implements INoteDetailState {
    constructor(
        private chosenNoteStore: IRepository<INote>
    ) { }

    get chosenNote() {
        return this.chosenNoteStore.data ?? {} as INote;
    }

    setChosenNote = (data: INote | null) => {
        this.chosenNoteStore.save(data);
    }

}

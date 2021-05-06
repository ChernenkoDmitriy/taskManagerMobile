import { INote } from "../../common/models/INote";
import { IRepository } from "../../common/repository/IRepository";

export interface IMainPageState {
    readonly notes: INote[];
    setNotes: (data: INote[]) => void;
    setChosenNote: (data: INote | null) => void;
}

export class MainPageState implements IMainPageState {
    constructor(
        private notesStore: IRepository<INote[]>,
        private chosenNoteStore: IRepository<INote>
    ) { }

    get notes() { return this.notesStore.data ?? []; }
    setNotes = (data: INote[]) => { this.notesStore.save(data); }

    setChosenNote = (data: INote | null) => { this.chosenNoteStore.save(data); }

}

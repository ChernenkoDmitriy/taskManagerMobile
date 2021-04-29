import { INote } from "../../common/models/INote";
import { IRepository } from "../../common/repository/IRepository";

export interface IMainPageState {
    readonly notes: INote[];
    setNotes: (data: INote[]) => void;
}

export class MainPageState implements IMainPageState {
    constructor(
        private notesStore: IRepository<INote[]>
    ) { }

    get notes() {
        return this.notesStore.data ?? [];
    }

    setNotes = (data: INote[]) => {
        this.notesStore.save(data);
    }

}

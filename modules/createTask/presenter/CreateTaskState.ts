import { IRepository } from "../../common/repository/IRepository";

export interface ICreateTaskState {
    readonly noteTitle: string;
    readonly noteContent: string;
    setNoteTitle: (data: string) => void;
    setNoteContent: (data: string) => void;
    setDefaultState: () => void;
}

export class CreateTaskState implements ICreateTaskState {
    constructor(
        private noteTitleStore: IRepository<string>,
        private noteContentStore: IRepository<string>,
    ) { }

    get noteTitle() {
        return this.noteTitleStore.data ?? '';
    }

    get noteContent() {
        return this.noteContentStore.data ?? '';
    }

    setNoteTitle = (data: string) => {
        this.noteTitleStore.save(data);
    }

    setNoteContent = (data: string) => {
        this.noteContentStore.save(data);
    }

    setDefaultState = () => {
        this.noteContentStore.save(null);
        this.noteTitleStore.save(null);
    }

}

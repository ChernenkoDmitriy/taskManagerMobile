import { NotePoint } from "../../common/models/INote";
import { IRepository } from "../../common/repository/IRepository";

export interface ICreateNoteState {
    readonly isCreateEnabled: boolean;
    readonly notePoints: NotePoint[];
    readonly noteTitle: string;
    readonly noteContent: string;
    setIsCreateEnabled: (data: boolean) => void;
    setNoteTitle: (data: string) => void;
    setNoteContent: (data: string) => void;
    setDefaultState: () => void;
    setNotePoints: (data: NotePoint[]) => void;
}

export class CreateNoteState implements ICreateNoteState {
    constructor(
        private noteTitleStore: IRepository<string>,
        private noteContentStore: IRepository<string>,
        private notePointsStore: IRepository<NotePoint[]>,
        private isCreateEnabledStore: IRepository<boolean>,
    ) { }

    get isCreateEnabled() {
        return this.isCreateEnabledStore.data ?? false;
    }

    setIsCreateEnabled = (data: boolean) => {
        this.isCreateEnabledStore.save(data);
    }

    get notePoints() {
        return this.notePointsStore.data ?? [];
    }

    setNotePoints = (data: NotePoint[]) => {
        this.notePointsStore.save(data);
    }

    get noteTitle() {
        return this.noteTitleStore.data ?? '';
    }

    setNoteTitle = (data: string) => {
        this.noteTitleStore.save(data);
    }

    get noteContent() {
        return this.noteContentStore.data ?? '';
    }

    setNoteContent = (data: string) => {
        this.noteContentStore.save(data);
    }

    setDefaultState = () => {
        this.noteContentStore.save(null);
        this.noteTitleStore.save(null);
        this.notePointsStore.save(null);
        this.isCreateEnabledStore.save(null);
    }

}

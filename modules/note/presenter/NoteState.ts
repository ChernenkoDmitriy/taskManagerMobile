import { INote, Priority } from "../../common/models/INote";
import { IRepository } from "../../common/repository/IRepository";

export interface INoteState {
    readonly priorities: Priority[];
    readonly notes: INote[];
    readonly chosenNote: INote;
    readonly isOpenedPriorityMenu: boolean;
    readonly isCreateEnabled: boolean;
    readonly isEdit: boolean;
    setChosenNote: (data: INote | null) => void;
    setIsOpenedPriorityMenu: (data: boolean) => void;
    setIsEdit: (data: boolean) => void;
    setIsCreateEnabled: (data: boolean) => void;
    setDefaultState: () => void;
}

export class NoteState implements INoteState {
    constructor(
        private chosenNoteStore: IRepository<INote>,
        private isOpenedPriorityMenuStore: IRepository<boolean>,
        private isEditStore: IRepository<boolean>,
        private isCreateEnabledStore: IRepository<boolean>,
        private notesStore: IRepository<INote[]>,
    ) { }

    get notes() {
        return this.notesStore.data ?? [];
    }

    get priorities() {
        return ["high", "medium", "low"] as Priority[];
    }

    get isCreateEnabled() {
        return this.isCreateEnabledStore.data ?? false;
    }

    setIsCreateEnabled = (data: boolean) => {
        this.isCreateEnabledStore.save(data);
    }

    get chosenNote() {
        return this.chosenNoteStore.data ?? { content: '', title: '', priority: 'medium', status: 'new', points: [] } as any;
    }

    setChosenNote = (data: INote | null) => {
        this.chosenNoteStore.save(data);
    }

    get isOpenedPriorityMenu() {
        return this.isOpenedPriorityMenuStore.data ?? false;
    }

    setIsOpenedPriorityMenu = (data: boolean) => {
        this.isOpenedPriorityMenuStore.save(data);
    }

    get isEdit() {
        return this.isEditStore.data ?? false;
    }

    setIsEdit = (data: boolean) => {
        this.isEditStore.save(data);
    }

    setDefaultState = () => {
        this.chosenNoteStore.save(null);
        this.isOpenedPriorityMenuStore.save(null);
        this.isEditStore.save(null);
    }

}

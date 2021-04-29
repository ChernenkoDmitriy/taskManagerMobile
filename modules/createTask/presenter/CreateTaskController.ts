import { ICreateTaskState } from "./CreateTaskState";
import { ICreateTaskUseCase } from "../useCases/CreateTaskUseCase";
import { ICreateNoteUseCase } from "../useCases/CreateNoteUseCase/CreateNoteUseCase";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";

export interface ICreateTaskController {
    onChangeNoteTitle: (data: string) => void;
    onChangeNoteContent: (data: string) => void;
    createNote: (navigation: IStackNavigation) => Promise<void>;
}

export class CreateTaskController implements ICreateTaskController {
    constructor(
        private state: ICreateTaskState,
        private createTaskUseCase: ICreateTaskUseCase,
        private createNoteUseCase: ICreateNoteUseCase,
    ) { }

    onChangeNoteTitle = (data: string) => {
        this.state.setNoteTitle(data);
    }

    onChangeNoteContent = (data: string) => {
        this.state.setNoteContent(data);
    }

    createNote = async (navigation: IStackNavigation) => {
        await this.createNoteUseCase.createNote(this.state.noteTitle, this.state.noteContent);
        this.state.setDefaultState();
        navigation.goBack();
    }

}

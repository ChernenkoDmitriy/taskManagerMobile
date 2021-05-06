import { ICreateNoteState } from "./CreateNoteState";
import { ICreateNoteUseCase } from "../useCases/CreateNoteUseCase/CreateNoteUseCase";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { INoteHelper } from "../../common/api/noteHelper/INoteHelper";

export interface ICreateNoteController {
    onChangePointProgress: (id: string) => void;
    onAddPoint: () => void;
    onDeletePoint: (id: string) => void;
    onChangePoint: (data: string, id: string) => void;
    onChangeNoteTitle: (data: string) => void;
    onChangeNoteContent: (data: string, index?: number) => void;
    createNote: (navigation: IStackNavigation) => Promise<void>;
    clear: () => void;
}

export class CreateNoteController implements ICreateNoteController {
    constructor(
        private state: ICreateNoteState,
        private noteHelper: INoteHelper,
        private createNoteUseCase: ICreateNoteUseCase,
    ) { }

    onAddPoint = () => {
        const notePoints = this.noteHelper.createNotePoint();
        this.state.setNotePoints([...this.state.notePoints, notePoints]);
        this.validateIsCreateEnabled();
    }

    onDeletePoint = (uid: string) => {
        const notePoints = this.state.notePoints.filter(item => item.uid !== uid)
        this.state.setNotePoints(notePoints);
        this.validateIsCreateEnabled();
    }

    onChangePoint = (data: string, uid: string) => {
        const notePoints = this.state.notePoints.map(item => {
            if (item.uid === uid) {
                item.text = data;
                return item;
            }
            return item;
        })
        this.state.setNotePoints(notePoints);
        this.validateIsCreateEnabled();
    }

    onChangePointProgress = (uid: string) => {
        const notePoints = this.state.notePoints.map(item => {
            if (item.uid === uid) {
                item.isDone = !item.isDone;
                return item;
            }
            return item;
        })
        this.state.setNotePoints(notePoints);
        this.validateIsCreateEnabled();
    }

    onChangeNoteTitle = (data: string) => {
        this.state.setNoteTitle(data);
        this.validateIsCreateEnabled();
    }

    onChangeNoteContent = (data: string) => {
        this.state.setNoteContent(data);
        this.validateIsCreateEnabled();
    }

    createNote = async (navigation: IStackNavigation) => {
        await this.createNoteUseCase.createNote(this.state.noteTitle, this.state.noteContent, this.state.notePoints);
        this.state.setDefaultState();
        navigation.goBack();
    }

    clear = () => {
        this.state.setDefaultState();
    }

    private validateIsCreateEnabled = () => {
        const { noteTitle, noteContent, notePoints } = this.state;
        const isEnabled = !!(noteTitle || noteContent || notePoints.length);
        this.state.setIsCreateEnabled(isEnabled);
    }

}

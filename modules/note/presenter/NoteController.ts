import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { INote, Priority } from "../../common/models/INote";
import { INoteHelper } from "../api/noteHelper/INoteHelper";
import { IChangePointProgressUseCase } from "../useCases/changePointProgressUseCase/ChangePointProgressUseCase";
import { ICreateNoteUseCase } from "../useCases/CreateNoteUseCase/CreateNoteUseCase";
import { IDeleteNoteUseCase } from "../useCases/deleteNoteUseCase/DeleteNoteUseCase";
import { IEditNoteUseCase } from "../useCases/editNoteUseCase/EditNoteUseCase";
import { INoteState } from "./NoteState";

export interface INoteController {
    onChangePointProgress: (id: string) => void;
    onChangePointProgressEdit: (id: string) => void;
    onAddPoint: () => void;
    onDeletePoint: (id: string) => void;
    onChangePoint: (data: string, id: string) => void;
    onChangeNoteTitle: (data: string) => void;
    onChangeNoteContent: (data: string, index?: number) => void;
    onSave: (navigation: IStackNavigation) => Promise<void>;
    gotToEdit: (navigation: IStackNavigation) => void;
    onDelete: (navigation: IStackNavigation) => Promise<void>;
    clear: () => void;
    onChosePriority: (data: Priority) => void;
    onOpenMenuPriority: () => void;
    onChoseNote: (navigation: IStackNavigation, note: INote) => void;
    convertTimeToString: (time: number) => string;
}

export class NoteController implements INoteController {
    constructor(
        private state: INoteState,
        private noteHelper: INoteHelper,
        private deleteNoteUseCase: IDeleteNoteUseCase,
        private createNoteUseCase: ICreateNoteUseCase,
        private editNoteUseCase: IEditNoteUseCase,
        private changePointProgressUseCase: IChangePointProgressUseCase

    ) { }

    onChosePriority = (data: Priority) => {
        this.state.setChosenNote({ ...this.state.chosenNote, priority: data });
        this.state.setIsOpenedPriorityMenu(false);
    }

    onOpenMenuPriority = () => {
        this.state.setIsOpenedPriorityMenu(true);
    }

    onAddPoint = () => {
        const notePoints = this.noteHelper.createNotePoint();
        const points = this.state.chosenNote.points ?? [];
        this.state.setChosenNote({ ...this.state.chosenNote, points: [notePoints, ...points] });
        this.validateIsCreateEnabled();
    }

    onDeletePoint = (uid: string) => {
        const points = this.state.chosenNote.points.filter(item => item.uid !== uid);
        this.state.setChosenNote({ ...this.state.chosenNote, points: [...points] });
        this.validateIsCreateEnabled();
    }

    onChangePoint = (data: string, uid: string) => {
        const points = this.state.chosenNote.points.map(item => {
            if (item.uid === uid) {
                item.text = data;
                return item;
            }
            return item;
        })
        this.state.setChosenNote({ ...this.state.chosenNote, points: [...points] });
        this.validateIsCreateEnabled();
    }

    onChangePointProgressEdit = (uid: string) => {
        const points = this.state.chosenNote.points.map(item => {
            if (item.uid === uid) {
                item.isDone = !item.isDone;
                return item;
            }
            return item;
        })
        this.state.setChosenNote({ ...this.state.chosenNote, points: [...points] });
        this.validateIsCreateEnabled();
    }

    onChangeNoteTitle = (data: string) => {
        this.state.setChosenNote({ ...this.state.chosenNote, title: data });
        this.validateIsCreateEnabled();
    }

    onChangeNoteContent = (data: string) => {
        this.state.setChosenNote({ ...this.state.chosenNote, content: data });
        this.validateIsCreateEnabled();
    }

    gotToEdit = (navigation: IStackNavigation) => {
        this.state.setIsEdit(true);
        navigation.navigate('EditNoteScreen');
    }

    onDelete = async (navigation: IStackNavigation) => {
        const uid = this.state.chosenNote.uid;
        await this.deleteNoteUseCase.delete(uid);
        navigation.goBack();
        this.state.setDefaultState();
    }

    onChangePointProgress = async (uid: string) => {
        await this.changePointProgressUseCase.update(uid);
    }

    onSave = async (navigation: IStackNavigation) => {
        if (this.state.isEdit) {
            await this.onEdit();
        } else {
            await this.createNote();
        }
        navigation.goBack();
    }

    clear = () => {
        if (!this.state.isEdit) {
            this.state.setDefaultState();
        }
        this.state.setIsEdit(false);
    }

    private createNote = async () => {
        const { title, content, points, priority } = this.state.chosenNote;
        await this.createNoteUseCase.createNote(title, content, points, priority);
    }

    private onEdit = async () => {
        await this.editNoteUseCase.editNote();
    }

    private validateIsCreateEnabled = () => {
        const isEnabled = !!(this.state.chosenNote.title || this.state.chosenNote.content || this.state.chosenNote.points.length);
        this.state.setIsCreateEnabled(isEnabled);
    }

    onChoseNote = (navigation: IStackNavigation, note: INote) => {
        this.state.setChosenNote(note);
        navigation.navigate('NoteDetailScreen');
    }

    convertTimeToString = (time: number) => {
        const date = new Date(time);
        const day = this.addZeroIfLessThenTen(date.getDate());
        const month = this.addZeroIfLessThenTen(date.getMonth() + 1);
        const year = this.addZeroIfLessThenTen(date.getFullYear());
        const hours = this.addZeroIfLessThenTen(date.getHours());
        const minutes = this.addZeroIfLessThenTen(date.getMinutes());
        return `${day}.${month}.${year}  ${hours}:${minutes}`;
    }

    private addZeroIfLessThenTen = (number: number) => {
        let result: number | string = number;
        if (number < 10) {
            result = '0' + String(number);
        }
        return result;
    }

}

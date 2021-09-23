import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { IRoom } from "../../common/models/IRoom";
import { ISmartTask } from "../../common/models/ISmartTask";
import { IRepository } from "../../common/repository/IRepository";
import { ISmartTaskHelper } from "../api/smartTaskHelper/ISmartTaskHelper";
import { ICreateSmartTaskUseCase } from "../useCases/createNoteUseCase/CreateNoteUseCase";
import { IUpdateSmartTaskUseCase } from "../useCases/updateSmartTaskUseCase/UpdateSmartTaskUseCase";
import { ISmartTaskState } from "./SmartTaskState";

export interface ISmartTaskController {
    setChosenSmartTask: (data: ISmartTask) => void;
    onChangeTitle: (data: string) => void;
    onChangeContent: (data: string) => void;
    onAddPoint: () => void;
    onDeletePoint: (id: string) => void;
    onChangePointProgress: (id: string) => void;
    onChangePoint: (data: string, id: string) => void;
    onUnmounted: () => void;
    onSave: (navigation: IStackNavigation) => Promise<void>;
}

export class SmartTaskController implements ISmartTaskController {
    constructor(
        private state: ISmartTaskState,
        private smartTaskHelper: ISmartTaskHelper,
        private chosenRoomStore: IRepository<IRoom>,
        private createSmartTaskUseCase: ICreateSmartTaskUseCase,
        private updateSmartTaskUseCase: IUpdateSmartTaskUseCase,
    ) { }

    setChosenSmartTask = (data: ISmartTask) => {
        this.state.setChosenSmartTask(data);
    }

    onChangeTitle = (data: string) => {
        const task = this.state.chosenSmartTask;
        this.state.setChosenSmartTask({ ...task, title: data });
    }

    onChangeContent = (data: string) => {
        const task = this.state.chosenSmartTask;
        this.state.setChosenSmartTask({ ...task, content: data });
    }

    onAddPoint = () => {
        const task = this.state.chosenSmartTask;
        const point = this.smartTaskHelper.createPoint();
        this.state.setChosenSmartTask({ ...task, points: [...task.points, point] });
    }

    onDeletePoint = (id: string) => {
        const task = this.state.chosenSmartTask;
        const points = task.points.filter(item => item.id !== id);
        this.state.setChosenSmartTask({ ...task, points });
    }

    onChangePoint = (data: string, id: string) => {
        const task = this.state.chosenSmartTask;
        const points = task.points.map(item => {
            if (item.id === id) {
                item.text = data;
                return item;
            }
            return item;
        })
        this.state.setChosenSmartTask({ ...task, points });
    }

    onChangePointProgress = (id: string) => {
        const task = this.state.chosenSmartTask;
        const points = task.points.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
                return item;
            }
            return item;
        })
        this.state.setChosenSmartTask({ ...task, points });
    }

    onSave = async (navigation: IStackNavigation) => {
        const task = this.state.chosenSmartTask;
        const roomId = this.chosenRoomStore.data?.id;
        if (task.id) {
            await this.updateSmartTaskUseCase.updateSmartTask();
        } else {
            await this.createSmartTaskUseCase.createSmartTask(task, roomId as string);
        }
        navigation.goBack();
    }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}




// export interface ISmartTaskController {
//     onChangePointProgress: (id: string) => void;
//     onChangePointProgressEdit: (id: string) => void;
//     onAddPoint: () => void;
//     onDeletePoint: (id: string) => void;
//     onChangePoint: (data: string, id: string) => void;
//     onChangeNoteTitle: (data: string) => void;
//     onChangeNoteContent: (data: string, index?: number) => void;
//     onSave: (navigation: IStackNavigation) => Promise<void>;
//     gotToEdit: (navigation: IStackNavigation) => void;
//     onDelete: (navigation: IStackNavigation) => Promise<void>;
//     clear: () => void;
//     onChosePriority: (data: Priority) => void;
//     onOpenMenuPriority: () => void;
//     onChoseNote: (navigation: IStackNavigation, note: INote) => void;
//     convertTimeToString: (time: number) => string;
// }

// export class SmartTaskController implements ISmartTaskController {
//     constructor(
//         private state: ISmartTaskState,
//         private noteHelper: INoteHelper,
//         private deleteNoteUseCase: IDeleteNoteUseCase,
//         private createNoteUseCase: ICreateNoteUseCase,
//         private editNoteUseCase: IEditNoteUseCase,
//         private changePointProgressUseCase: IChangePointProgressUseCase

//     ) { }

//     onChosePriority = (data: Priority) => {
//         this.state.setChosenNote({ ...this.state.chosenNote, priority: data });
//         this.state.setIsOpenedPriorityMenu(false);
//     }

//     onOpenMenuPriority = () => {
//         this.state.setIsOpenedPriorityMenu(true);
//     }

//     onAddPoint = () => {
//         const notePoints = this.noteHelper.createNotePoint();
//         const points = this.state.chosenNote.points ?? [];
//         this.state.setChosenNote({ ...this.state.chosenNote, points: [notePoints, ...points] });
//         this.validateIsCreateEnabled();
//     }

//     onDeletePoint = (uid: string) => {
//         const points = this.state.chosenNote.points.filter(item => item.uid !== uid);
//         this.state.setChosenNote({ ...this.state.chosenNote, points: [...points] });
//         this.validateIsCreateEnabled();
//     }

//     onChangePoint = (data: string, uid: string) => {
//         const points = this.state.chosenNote.points.map(item => {
//             if (item.uid === uid) {
//                 item.text = data;
//                 return item;
//             }
//             return item;
//         })
//         this.state.setChosenNote({ ...this.state.chosenNote, points: [...points] });
//         this.validateIsCreateEnabled();
//     }

//     onChangePointProgressEdit = (uid: string) => {
//         const points = this.state.chosenNote.points.map(item => {
//             if (item.uid === uid) {
//                 item.isDone = !item.isDone;
//                 return item;
//             }
//             return item;
//         })
//         this.state.setChosenNote({ ...this.state.chosenNote, points: [...points] });
//         this.validateIsCreateEnabled();
//     }

//     onChangeNoteTitle = (data: string) => {
//         this.state.setChosenNote({ ...this.state.chosenNote, title: data });
//         this.validateIsCreateEnabled();
//     }

//     onChangeNoteContent = (data: string) => {
//         this.state.setChosenNote({ ...this.state.chosenNote, content: data });
//         this.validateIsCreateEnabled();
//     }

//     gotToEdit = (navigation: IStackNavigation) => {
//         this.state.setIsEdit(true);
//         navigation.navigate('EditNoteScreen');
//     }

//     onDelete = async (navigation: IStackNavigation) => {
//         const uid = this.state.chosenNote.uid;
//         await this.deleteNoteUseCase.delete(uid);
//         navigation.goBack();
//         this.state.setDefaultState();
//     }

//     onChangePointProgress = async (uid: string) => {
//         await this.changePointProgressUseCase.update(uid);
//     }

//     onSave = async (navigation: IStackNavigation) => {
//         if (this.state.isEdit) {
//             await this.onEdit();
//         } else {
//             await this.createNote();
//         }
//         navigation.goBack();
//     }

//     clear = () => {
//         if (!this.state.isEdit) {
//             this.state.setDefaultState();
//         }
//         this.state.setIsEdit(false);
//     }

//     private createNote = async () => {
//         const { title, content, points, priority } = this.state.chosenNote;
//         await this.createNoteUseCase.createNote(title, content, points, priority);
//     }

//     private onEdit = async () => {
//         await this.editNoteUseCase.editNote();
//     }

//     private validateIsCreateEnabled = () => {
//         const isEnabled = !!(this.state.chosenNote.title || this.state.chosenNote.content || this.state.chosenNote.points.length);
//         this.state.setIsCreateEnabled(isEnabled);
//     }

//     onChoseNote = (navigation: IStackNavigation, note: INote) => {
//         this.state.setChosenNote(note);
//         navigation.navigate('NoteDetailScreen');
//     }

//     convertTimeToString = (time: number) => {
//         const date = new Date(time);
//         const day = this.addZeroIfLessThenTen(date.getDate());
//         const month = this.addZeroIfLessThenTen(date.getMonth() + 1);
//         const year = this.addZeroIfLessThenTen(date.getFullYear());
//         const hours = this.addZeroIfLessThenTen(date.getHours());
//         const minutes = this.addZeroIfLessThenTen(date.getMinutes());
//         return `${day}.${month}.${year}  ${hours}:${minutes}`;
//     }

//     private addZeroIfLessThenTen = (number: number) => {
//         let result: number | string = number;
//         if (number < 10) {
//             result = '0' + String(number);
//         }
//         return result;
//     }

// }

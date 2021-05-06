import { INoteDetailState } from "./NoteDetailState";
import { IDeleteNoteUseCase } from "../useCases/deleteNoteUseCase/DeleteNoteUseCase";
import { IChangePointProgressUseCase } from "../useCases/changePointProgressUseCase/ChangePointProgressUseCase";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";

export interface INoteDetailController {
    onDone: (navigation: IStackNavigation) => void;
    onDelete: (navigation: IStackNavigation) => void;
    onChangePointProgress: (uid: string) => void;
}

export class NoteDetailController implements INoteDetailController {
    constructor(
        private state: INoteDetailState,
        private deleteNoteUseCase: IDeleteNoteUseCase,
        private changePointProgressUseCase: IChangePointProgressUseCase,
    ) { }

    onDone = (navigation: IStackNavigation) => {

    }

    onDelete = async (navigation: IStackNavigation) => {
        const uid = this.state.chosenNote.uid;
        await this.deleteNoteUseCase.delete(uid);
        navigation.goBack();
    }

    onChangePointProgress = async (uid: string) => {
        await this.changePointProgressUseCase.update(uid);
    }

}

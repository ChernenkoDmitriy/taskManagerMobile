import { IMainPageState } from "./MainPageState";
import { ILoadQuestsUseCase } from "../useCases/LoadQuestsUseCase";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { INote } from "../../common/models/INote";

export interface IMainPageController {
    onChoseNote: (navigation: IStackNavigation, note: INote) => void;
}

export class MainPageController implements IMainPageController {
    constructor(
        private state: IMainPageState,
        private loadQuestsUseCase: ILoadQuestsUseCase,
    ) { }

    onChoseNote = (navigation: IStackNavigation, note: INote) => {
        this.state.setChosenNote(note);
        navigation.navigate('NoteDetailScreen');
    }

}

import { IMainPageState } from "./MainPageState";
import { ILoadQuestsUseCase } from "../useCases/LoadQuestsUseCase";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { INote } from "../../common/models/INote";

export interface IMainPageController {
    onChoseNote: (navigation: IStackNavigation, note: INote) => void;
    convertTimeToString: (time: number) => string;
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

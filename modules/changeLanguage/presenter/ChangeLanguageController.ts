import { IChangeLanguageState } from "./ChangeLanguageState";
import { IChangeLanguageUseCase } from "../useCases/ChangeLanguageUseCase";

export interface IChangeLanguageController {
    onChangeLanguage: (data: string) => void;
}

export class ChangeLanguageController implements IChangeLanguageController {
    constructor(
        private state: IChangeLanguageState,
        private changeLanguageUseCase: IChangeLanguageUseCase,
    ) { }

    onChangeLanguage = (data: string) => {
        this.state.setLocale(data);
    }

}

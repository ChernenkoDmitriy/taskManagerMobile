import { IChangeLanguageController } from "./ChangeLanguageController";

export interface IChangeLanguagePresenter {
    controller: IChangeLanguageController;
    state: {
        readonly languageList: Array<string>;
        readonly locale: string;
    };
}

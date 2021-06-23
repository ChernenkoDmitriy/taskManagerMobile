import { ILocalization } from "../../../src/localization/ILocalization";

export interface IChangeLanguageState {
    readonly languageList: Array<string>;
    readonly locale: string;
    setLocale: (data: string) => void;
}

export class ChangeLanguageState implements IChangeLanguageState {
    constructor(
        private localization: ILocalization,
    ) { }

    get languageList() {
        return ['ru', 'en'];
    }

    get locale() {
        return this.localization.locale;
    }

    setLocale = (data: string) => {
        this.localization.setLocale(data);
    }

}

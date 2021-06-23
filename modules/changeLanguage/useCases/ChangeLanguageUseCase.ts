export interface IChangeLanguageUseCase {
    changeLanguage: () => Promise<void>;
}

export class ChangeLanguageUseCase implements IChangeLanguageUseCase {
    constructor(

    ) { }

    changeLanguage = async () => {
        try {

        } catch (error) {
            console.warn('ChangeLanguageUseCase -> changeLanguage: ', error);
        }
    }

}

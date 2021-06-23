import { IChangeLanguagePresenter } from "../presenter/IChangeLanguagePresenter";
import { ChangeLanguageController } from "../presenter/ChangeLanguageController";
import { ChangeLanguageState } from "../presenter/ChangeLanguageState";
import { ChangeLanguageUseCase } from "../useCases/ChangeLanguageUseCase";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";

export class ChangeLanguageFactory {
    private static presenter: IChangeLanguagePresenter;

    static get() {
        if (!ChangeLanguageFactory.presenter) {
            ChangeLanguageFactory.presenter = new ChangeLanguageFactory().createPresenter();
        }
        return ChangeLanguageFactory.presenter;
    }

    private createPresenter = () => {
        const { localization } = BaseFactory.get();

        const changeLanguageUseCase = new ChangeLanguageUseCase();

        const state = new ChangeLanguageState(localization);
        const controller = new ChangeLanguageController(state, changeLanguageUseCase,);

        return { controller, state };
    }

}

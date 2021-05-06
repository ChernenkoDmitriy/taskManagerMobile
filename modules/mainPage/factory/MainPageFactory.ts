import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { IMainPagePresenter } from "../presenter/IMainPagePresenter";
import { MainPageController } from "../presenter/MainPageController";
import { MainPageState } from "../presenter/MainPageState";
import { LoadQuestsUseCase } from "../useCases/LoadQuestsUseCase";


export class MainPageFactory {
    private static presenter: IMainPagePresenter;

    static get() {
        if (!MainPageFactory.presenter) {
            MainPageFactory.presenter = new MainPageFactory().createPresenter();
        }
        return MainPageFactory.presenter;
    }

    private createPresenter = () => {
        const { chosenNoteStore, notesStore } = BaseFactory.get();

        const loadQuestsUseCase = new LoadQuestsUseCase();

        const state = new MainPageState(notesStore, chosenNoteStore);
        const controller = new MainPageController(state, loadQuestsUseCase,);
        return { controller, state, notesStore };
    }

}


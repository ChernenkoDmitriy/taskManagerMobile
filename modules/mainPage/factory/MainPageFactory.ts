import { INote } from "../../common/models/INote";
import { MobXRepository } from "../../common/repository/MobXRepository";
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
        const notesStore = new MobXRepository<INote[]>();

        const loadQuestsUseCase = new LoadQuestsUseCase();

        const state = new MainPageState(notesStore);
        const controller = new MainPageController(state, loadQuestsUseCase,);
        return { controller, state, notesStore };
    }

}


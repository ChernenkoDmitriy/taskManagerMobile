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
        const mainPageState = new MainPageState( );

        const loadQuestsUseCase = new LoadQuestsUseCase(  );


        const mainPageController = new MainPageController(mainPageState, loadQuestsUseCase, );
    
        return { mainPageController, mainPageState };
    }

}

    
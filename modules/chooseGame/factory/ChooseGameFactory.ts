import { IChooseGamePresenter } from "../presenter/IChooseGamePresenter";
import { ChooseGameController } from "../presenter/ChooseGameController";
import { ChooseGameState } from "../presenter/ChooseGameState";


export class ChooseGameFactory {
    private static presenter: IChooseGamePresenter;

    static get() {
        if (!ChooseGameFactory.presenter) {
            ChooseGameFactory.presenter = new ChooseGameFactory().createPresenter();
        }
        return ChooseGameFactory.presenter;
    }

    private createPresenter = () => {
        const chooseGameState = new ChooseGameState( );

        

        const chooseGameController = new ChooseGameController(chooseGameState, );
    
        return { chooseGameController, chooseGameState };
    }

}

    
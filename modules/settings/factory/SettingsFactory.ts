import { ISettingsPresenter } from "../presenter/ISettingsPresenter";
import { SettingsController } from "../presenter/SettingsController";
import { SettingsState } from "../presenter/SettingsState";

export class SettingsFactory {
    private static presenter: ISettingsPresenter;

    static get() {
        if (!SettingsFactory.presenter) {
            SettingsFactory.presenter = new SettingsFactory().createPresenter();
        }
        return SettingsFactory.presenter;
    }

    private createPresenter = () => {
        
        const state = new SettingsState( );
        const controller = new SettingsController(state, );
    
        return { controller, state };
    }

}

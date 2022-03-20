import { ISettingsState } from "./SettingsState";

export interface ISettingsController {
    onUnmounted: () => void;
}

export class SettingsController implements ISettingsController {
    constructor(
        private state: ISettingsState,
        
    ) { }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}

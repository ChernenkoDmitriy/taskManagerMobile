import { Easing, timing } from "react-native-reanimated";
import { IReadLocalizationUseCase } from "../useCases/ReadLocalizationUseCase";
import { IReadNotesUseCase } from "../useCases/ReadNotesUseCase";
import { IReadThemeUseCase } from "../useCases/ReadThemeUseCase";
import { ILaunchAppState } from "./LaunchAppState";

export interface ILaunchAppController {
    launchAppData: () => Promise<void>;
}

export class LaunchAppController implements ILaunchAppController {
    constructor(
        private launchAppState: ILaunchAppState,
        private readLocalizationUseCase: IReadLocalizationUseCase,
        private readThemeUseCase: IReadThemeUseCase,
        private readNotesUseCase: IReadNotesUseCase
    ) { }

    launchAppData = async () => {
        try {
            this.animatedOpacity();
            await this.readLocalizationUseCase.read();
            await this.readThemeUseCase.read();
            await this.readNotesUseCase.read();
            this.launchAppState.setIsAppLoaded(true);
        } catch (error) {
            console.warn('LaunchAppController -> launchAppState: ', error);
        }
    }

    private animatedOpacity = () => {
        timing(this.launchAppState.opacityLogo, { toValue: 2, duration: 700, easing: Easing.linear })
            .start(({ finished }) => {
                if (finished) {
                    this.launchAppState.setIsAnimationFinished(true);
                }
            });
    }

}

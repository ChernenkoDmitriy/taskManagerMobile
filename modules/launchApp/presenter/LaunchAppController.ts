import { Easing, timing } from "react-native-reanimated";
import { IReadLocalizationUseCase } from "../useCases/ReadLocalizationUseCase";
import { IReadThemeUseCase } from "../useCases/ReadThemeUseCase";
import { ILaunchAppState } from "./LaunchAppState";

export interface ILaunchAppController {
    launchAppData: () => Promise<void>;
}

export class LaunchAppController implements ILaunchAppController {
    constructor(
        private launchAppState: ILaunchAppState,
        private readLocalizationUseCase: IReadLocalizationUseCase,
        private readThemeUseCase: IReadThemeUseCase
    ) { }

    launchAppData = async () => {
        try {
            this.animatedOpacity();
            await this.readLocalizationUseCase.read();
            await this.readThemeUseCase.read();
            this.launchAppState.setIsAppLoaded(true);
        } catch (error) {
            console.warn('LaunchAppController -> launchAppState: ', error);
        }
    }

    private animatedOpacity = () => {
        timing(this.launchAppState.opacityLogo, { toValue: 2, duration: 1800, easing: Easing.linear })
            .start(({ finished }) => {
                if (finished) {
                    this.launchAppState.setIsAnimationFinished(true);
                }
            });
    }

}

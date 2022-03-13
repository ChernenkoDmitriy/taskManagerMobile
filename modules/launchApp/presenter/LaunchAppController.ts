import { EasingNode, timing } from "react-native-reanimated";
import { IConnectSocketUseCase } from "../../common/useCases/connectSocketUseCase/ConnectSocketUseCase";
import { IReadLocalizationUseCase } from "../useCases/ReadLocalizationUseCase";
import { IReadNotesUseCase } from "../useCases/ReadNotesUseCase";
import { IReadThemeUseCase } from "../useCases/ReadThemeUseCase";
import { IReadUserUseCase } from "../useCases/ReadUserFormStoreUseCase/ReadUserFormStoreUseCase";
import { ILaunchAppState } from "./LaunchAppState";

export interface ILaunchAppController {
    launchAppData: () => Promise<void>;
}

export class LaunchAppController implements ILaunchAppController {
    constructor(
        private launchAppState: ILaunchAppState,
        private readLocalizationUseCase: IReadLocalizationUseCase,
        private readThemeUseCase: IReadThemeUseCase,
        private readNotesUseCase: IReadNotesUseCase,
        private readUserUseCase: IReadUserUseCase,
        private connectSocketUseCase: IConnectSocketUseCase,
    ) { }

    launchAppData = async () => {
        try {
            this.animatedOpacity();
            await Promise.all([
                this.readLocalizationUseCase.read(),
                this.readThemeUseCase.read(),
                this.readNotesUseCase.read(),
                this.readUserUseCase.read()
            ]);
            this.connectSocketUseCase.connect();
            this.launchAppState.setIsAppLoaded(true);
        } catch (error) {
            console.warn('LaunchAppController -> launchAppState: ', error);
        }
    }

    private animatedOpacity = () => {
        timing(this.launchAppState.opacityLogo, { toValue: 2, duration: 700, easing: EasingNode.linear })
            .start(({ finished }) => {
                if (finished) {
                    this.launchAppState.setIsAnimationFinished(true);
                }
            });
    }

}

import Animated from "react-native-reanimated";
import { ILaunchAppController } from "./LaunchAppController";

export interface ILaunchAppPresenter {
    launchAppController: ILaunchAppController;
    launchAppState: {
        readonly opacityLogo: Animated.Node<number>;
    };
}

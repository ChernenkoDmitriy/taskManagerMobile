import Animated from "react-native-reanimated";
import { IRepository } from "../../common/repository/IRepository";

export interface ILaunchAppState {
    readonly opacityLogo: Animated.Node<number>;
    setIsAnimationFinished: (data: boolean) => void;
    setIsAppLoaded: (data: boolean) => void;
}

export class LaunchAppState implements ILaunchAppState {
    constructor(
        private isAppLoadedStore: IRepository<boolean>,
        private isAnimationFinishedStore: IRepository<boolean>,
        private isStartDataReadStore: IRepository<boolean>,
        private animatedOpacity: Animated.Node<number>
    ) { }

    setIsAnimationFinished = (data: boolean) => {
        this.isAnimationFinishedStore.save(data);
        this.leaveSplashScreen();
    }

    setIsAppLoaded = (data: boolean) => {
        this.isStartDataReadStore.save(data);
        this.leaveSplashScreen();
    }

    private leaveSplashScreen = () => {
        if (this.isStartDataReadStore.data && this.isAnimationFinishedStore.data) {
            this.isAppLoadedStore.save(true);
        }
    }

    get opacityLogo() {
        return this.animatedOpacity;
    }

}

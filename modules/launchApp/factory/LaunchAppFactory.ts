import Animated from "react-native-reanimated";
import { AsyncStoreStorage } from "../../../libs/storage";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { MainPageFactory } from "../../mainPage/factory/MainPageFactory";
import { LaunchAppStorage } from "../api/Storage";
import { ILaunchAppPresenter } from "../presenter/ILaunchAppPresenter";
import { LaunchAppController } from "../presenter/LaunchAppController";
import { LaunchAppState } from "../presenter/LaunchAppState";
import { ReadLocalizationUseCase } from "../useCases/ReadLocalizationUseCase";
import { ReadNotesUseCase } from "../useCases/ReadNotesUseCase";
import { ReadThemeUseCase } from "../useCases/ReadThemeUseCase";

export class LaunchAppFactory {
    private static presenter: ILaunchAppPresenter;

    static get() {
        if (!LaunchAppFactory.presenter) {
            LaunchAppFactory.presenter = new LaunchAppFactory().createPresenter();
        }
        return LaunchAppFactory.presenter;
    }

    private createPresenter = () => {
        const { isAppLoadedStore, colorTheme, localization, notesStore } = BaseFactory.get();
        const isAnimationFinishedStore = new MobXRepository<boolean>();
        const isStartDataReadStore = new MobXRepository<boolean>();
        const animatedOpacity = new Animated.Value(0);

        const config = new Config();
        const asyncStorage = new AsyncStoreStorage();
        const storage = new LaunchAppStorage(config.STORAGE_SERVICES, asyncStorage);
        const launchAppState = new LaunchAppState(isAppLoadedStore, isAnimationFinishedStore, isStartDataReadStore, animatedOpacity);
        const readLocalizationUseCase = new ReadLocalizationUseCase(storage, localization);
        const readThemeUseCase = new ReadThemeUseCase(storage, colorTheme);
        const readNotesUseCase = new ReadNotesUseCase(storage, notesStore);

        const launchAppController = new LaunchAppController(launchAppState, readLocalizationUseCase, readThemeUseCase, readNotesUseCase);

        return { launchAppController, launchAppState };
    }

}

import Animated from "react-native-reanimated";
import { NotificationService } from "../../../libs/notificationService/NotificationServise";
import { SocketIO } from "../../../libs/socket";
import { AsyncStoreStorage } from "../../../libs/storage";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { ConnectSocketUseCase } from "../../common/useCases/connectSocketUseCase/ConnectSocketUseCase";
import { LaunchAppStorage } from "../api/Storage";
import { ILaunchAppPresenter } from "../presenter/ILaunchAppPresenter";
import { LaunchAppController } from "../presenter/LaunchAppController";
import { LaunchAppState } from "../presenter/LaunchAppState";
import { ReadLocalizationUseCase } from "../useCases/ReadLocalizationUseCase";
import { ReadNotesUseCase } from "../useCases/ReadNotesUseCase";
import { ReadThemeUseCase } from "../useCases/ReadThemeUseCase";
import { ReadUserFormStoreUseCase } from "../useCases/ReadUserFormStoreUseCase/ReadUserFormStoreUseCase";

export class LaunchAppFactory {
    private static presenter: ILaunchAppPresenter;

    static get() {
        if (!LaunchAppFactory.presenter) {
            LaunchAppFactory.presenter = new LaunchAppFactory().createPresenter();
        }
        return LaunchAppFactory.presenter;
    }

    private createPresenter = () => {
        const { isAppLoadedStore, colorTheme, localization, notesStore, userStore } = BaseFactory.get();
        const isAnimationFinishedStore = new MobXRepository<boolean>();
        const isStartDataReadStore = new MobXRepository<boolean>();
        const animatedOpacity = new Animated.Value(0);

        const notificationService = new NotificationService();
        const config = new Config();
        const socket = new SocketIO();
        const asyncStorage = new AsyncStoreStorage();
        const storage = new LaunchAppStorage(config, asyncStorage);
        const launchAppState = new LaunchAppState(isAppLoadedStore, isAnimationFinishedStore, isStartDataReadStore, animatedOpacity);
        const readLocalizationUseCase = new ReadLocalizationUseCase(storage, localization);
        const readThemeUseCase = new ReadThemeUseCase(storage, colorTheme);
        const readNotesUseCase = new ReadNotesUseCase(storage, notesStore);
        const readUserUseCase = new ReadUserFormStoreUseCase(storage, userStore);
        const connectSocketUseCase = new ConnectSocketUseCase(config, socket, userStore);

        const launchAppController = new LaunchAppController(
            launchAppState,
            readLocalizationUseCase,
            readThemeUseCase,
            readNotesUseCase,
            readUserUseCase,
            connectSocketUseCase
        );

        return { launchAppController, launchAppState };
    }

}

import { IRepository } from "../../modules/common/repository/IRepository";
import { MobXRepository } from "../../modules/common/repository/MobXRepository";
import { ILocalization } from "../localization/ILocalization";
import { Localization } from "../localization/Localization";
import { IColorTheme, ThemeMobXStore, ColorTheme } from "../colorTheme";
import { IUser } from "../../modules/common/models/IUser";
import { IRoom } from "../../modules/common/models/IRoom";
import { ISmartTask } from "../../modules/common/models/ISmartTask";

export interface IBaseFactoryPresenter {
    userStore: IRepository<IUser>;
    userRoomsStore: IRepository<IRoom[]>;
    chosenRoomStore: IRepository<IRoom>;
    roomSmartTasksStore: IRepository<ISmartTask[]>;
    chosenSmartTaskStore: IRepository<ISmartTask>;
    isAppLoadedStore: IRepository<boolean>;
    colorTheme: IColorTheme;
    localization: ILocalization;
}

export class BaseFactory {
    private static presenter: IBaseFactoryPresenter;

    static get = () => {
        if (!BaseFactory.presenter) {
            BaseFactory.presenter = new BaseFactory().createBasePresenter();
        }
        return BaseFactory.presenter;
    }

    private createBasePresenter = (): IBaseFactoryPresenter => {
        // global biasness storages
        const userStore = new MobXRepository<IUser>();
        const userRoomsStore = new MobXRepository<IRoom[]>();
        const chosenRoomStore = new MobXRepository<IRoom>();
        const roomSmartTasksStore = new MobXRepository<ISmartTask[]>();
        const chosenSmartTaskStore = new MobXRepository<ISmartTask>();

        const isAppLoadedStore: IRepository<boolean> = new MobXRepository<boolean>();

        const colorThemeStore = new ThemeMobXStore();
        const colorTheme = new ColorTheme(colorThemeStore);
        const localizationStore = new MobXRepository<string>();
        const localization = new Localization(localizationStore);

        return {
            userStore,
            userRoomsStore,
            chosenRoomStore,
            roomSmartTasksStore,
            chosenSmartTaskStore,
            isAppLoadedStore,
            colorTheme,
            localization
        }
    }

}

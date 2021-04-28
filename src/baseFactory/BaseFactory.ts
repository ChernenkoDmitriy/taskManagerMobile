import { IRepository } from "../../modules/common/repository/IRepository";
import { MobXRepository } from "../../modules/common/repository/MobXRepository";
import { ILocalization } from "../localization/ILocalization";
import { Localization } from "../localization/Localization";
import { IColorTheme, IThemeStore, ThemeMobXStore, ColorTheme } from "../colorTheme";

export interface IBaseFactoryPresenter {
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
        const isAppLoadedStore: IRepository<boolean> = new MobXRepository<boolean>();

        const colorThemeStore: IThemeStore = new ThemeMobXStore();
        const colorTheme: IColorTheme = new ColorTheme(colorThemeStore);
        const localizationStore: IRepository<string> = new MobXRepository<string>();
        const localization: ILocalization = new Localization(localizationStore);

        return {
            isAppLoadedStore,
            colorTheme,
            localization
        }
    }

}

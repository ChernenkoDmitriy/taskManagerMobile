import { IRepository } from "../../modules/common/repository/IRepository";
import { MobXRepository } from "../../modules/common/repository/MobXRepository";
import { ILocalization } from "../localization/ILocalization";
import { Localization } from "../localization/Localization";
import { IColorTheme, ThemeMobXStore, ColorTheme } from "../colorTheme";
import { INote } from "../../modules/common/models/INote";

export interface IBaseFactoryPresenter {
    chosenNoteStore: IRepository<INote>;
    notesStore: IRepository<INote[]>;

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
        const chosenNoteStore = new MobXRepository<INote>();
        const notesStore = new MobXRepository<INote[]>();

        const isAppLoadedStore: IRepository<boolean> = new MobXRepository<boolean>();

        const colorThemeStore = new ThemeMobXStore();
        const colorTheme = new ColorTheme(colorThemeStore);
        const localizationStore = new MobXRepository<string>();
        const localization = new Localization(localizationStore);

        return {
            chosenNoteStore,
            notesStore,
            isAppLoadedStore,
            colorTheme,
            localization
        }
    }

}

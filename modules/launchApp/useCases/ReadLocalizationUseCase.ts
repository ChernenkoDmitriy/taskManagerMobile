import { ILocalization } from "../../../src/localization/ILocalization";
import { IReadLocale } from "../api/Storage";

export interface IReadLocalizationUseCase {
    read: () => Promise<void>;
}

export class ReadLocalizationUseCase implements IReadLocalizationUseCase {
    constructor(
        private storage: IReadLocale,
        private localization: ILocalization
    ) { }

    read = async () => {
        const locale = await this.storage.readLocalization();
        locale && this.localization.setLocale(locale);
        const translation = await this.storage.readTranslation();
        translation && this.localization.setTranslation(translation);
    }

}

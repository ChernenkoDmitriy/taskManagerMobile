import i18n from 'i18n-js';
import translations from './translation.json';
import { ILocalization } from './ILocalization';
import { IRepository } from '../../modules/common/repository/IRepository';

export class Localization implements ILocalization {
    constructor(private localizationStore: IRepository<string>) {
        i18n.fallbacks = true;
        i18n.translations = translations;
    }

    get locale() {
        return this.localizationStore.data || 'en';
    }

    setTranslation = (translations: any) => {
        if (typeof translations === 'object' && translations) {
            i18n.translations = translations;
        }
    }

    t = (key: string) => {
        const locale = this.localizationStore.data;
        return i18n.t(key, { locale: locale });
    }

    setLocale = (locale: string) => {
        this.localizationStore.save(locale);
    }

}

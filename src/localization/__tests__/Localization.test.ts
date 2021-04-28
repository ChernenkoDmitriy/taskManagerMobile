import { Localization } from '../Localization';

describe('LocalizationController', () => {
    const localizationStore: any = { data: null, save: function (key: string) { this.data = key } };
    const localizationController = new Localization(localizationStore);
    test('locale', () => {
        expect(localizationController.locale).toEqual('');
    });
    test('setLocale', () => {
        localizationController.setLocale('ru');
        expect(localizationController.locale).toEqual('ru');
    });
    test('t', () => {
        expect(localizationController.t('key')).toEqual('[missing \"ru.key\" translation]');
        localizationController.setTranslation({ ru: { key: 'hi' } });
        expect(localizationController.t('key')).toEqual('hi');
    });
})

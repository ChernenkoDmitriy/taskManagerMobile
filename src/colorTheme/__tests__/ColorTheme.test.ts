import { ColorTheme, ThemeMobXStore } from "..";

const MOCK_THEMES: any = {
    light: {
        "background": "#f8f9fa",
    },
    dark: {
        "background": "#212529",
    }
};

describe('ColorThemeController', () => {
    const colorThemeStore = new ThemeMobXStore();
    const colorThemeController = new ColorTheme(colorThemeStore);
    test('updateColorsSchemas with correct data', () => {
        colorThemeController.updateColorsSchemas(MOCK_THEMES);
        expect(colorThemeController.theme).toEqual(Object.keys(MOCK_THEMES)[0]);
    });
    test('updateColorsSchemas with null', () => {
        colorThemeController.updateColorsSchemas(null as any);
        expect(colorThemeStore.allThemes).toEqual(MOCK_THEMES);
    });
    test('updateColorsSchemas with exist theme', () => {
        expect(colorThemeStore.colors).toEqual(MOCK_THEMES.light);
        expect(colorThemeController.colors).toEqual(Object.values(MOCK_THEMES)[0]);
        colorThemeController.setTheme('dark');
        colorThemeController.updateColorsSchemas(MOCK_THEMES);
        expect(colorThemeController.colors).toEqual(MOCK_THEMES.dark);
    });
    test('setColors with correct data', () => {
        colorThemeController.setTheme('light');
        expect(colorThemeController.colors).toEqual(MOCK_THEMES.light);
    });
    test('setColors with null', () => {
        colorThemeController.setTheme('null');
        expect(colorThemeController.colors).toEqual(MOCK_THEMES.light);
    });
})

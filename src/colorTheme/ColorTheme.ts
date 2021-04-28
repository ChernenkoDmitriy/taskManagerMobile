import { IColors } from "./IColorTheme/IColors";
import { IColorTheme } from ".";
import { IThemeStore } from ".";
import colors from './colors.json';

export class ColorTheme  implements IColorTheme {
    constructor(private themeStore: IThemeStore) {
        this.updateColorsSchemas(colors);
    }

    get theme() {
        return this.themeStore.theme || 'light';
    }

    get colors() {
        return this.themeStore.colors || colors.light;
    }

    updateColorsSchemas = (data: { [key: string]: IColors }) => {
        if (data && Object.keys(data).length) {
            this.themeStore.saveAllColors(data);
            if (this.themeStore.theme && Object.keys(data).includes(this.themeStore.theme)) {
                // @ts-ignore
                this.themeStore.saveColors(this.themeStore.allThemes[this.theme]);
            } else {
                // @ts-ignore
                this.themeStore.saveColors(Object.values(data)[0]);
            }
        }
    }

    setTheme = (data: string) => {
        if (this.themeStore.allThemes && Object.keys(this.themeStore.allThemes).includes(data)) {
            this.themeStore.saveTheme(data);
            // @ts-ignore
            this.themeStore.saveColors(this.themeStore.allThemes[data]);
        }
    }

}
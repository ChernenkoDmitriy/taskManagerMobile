import { IColorTheme } from "../../../src/colorTheme";
import { IReadTheme } from "../api/Storage";

export interface IReadThemeUseCase {
    read: () => Promise<void>;
}

export class ReadThemeUseCase implements IReadThemeUseCase {
    constructor(
        private storage: IReadTheme,
        private colorTheme: IColorTheme
    ) { }

    read = async () => {
        const theme = await this.storage.readTheme();
        theme && this.colorTheme.setTheme(theme);
        const allTheme = await this.storage.readAllTheme();
        allTheme && this.colorTheme.updateColorsSchemas(allTheme);
    }

}

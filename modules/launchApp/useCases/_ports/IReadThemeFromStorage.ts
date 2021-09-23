import { IColors } from "../../../../src/colorTheme";

export interface IReadThemeFromStorage {
    readTheme: () => Promise<string | null>;
    readAllTheme: () => Promise<{ [key: string]: IColors; } | null>;
}

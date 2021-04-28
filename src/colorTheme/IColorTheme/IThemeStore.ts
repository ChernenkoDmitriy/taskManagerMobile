import { IColors } from "..";

export interface IThemeStore {
    theme: string | null;
    colors: IColors | null;
    allThemes: { [key: string]: IColors } | null;
    saveTheme: (data: string) => void;
    saveColors: (data: IColors) => void;
    saveAllColors: (data: { [key: string]: IColors }) => void;
}

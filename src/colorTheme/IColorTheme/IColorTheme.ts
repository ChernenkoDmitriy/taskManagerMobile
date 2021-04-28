import { IColors } from "./IColors";

export interface IColorTheme {
    theme: string;
    colors: IColors;
    setTheme: (value: string) => void;
    updateColorsSchemas: (data: { [key: string]: IColors }) => void;
}

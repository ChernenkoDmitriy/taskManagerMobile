import { action, makeAutoObservable } from 'mobx';
import { IColors } from '.';
import { IThemeStore } from '.';

export class ThemeMobXStore implements IThemeStore {
    constructor() {
        makeAutoObservable(this);
    }

    theme: string | null = null;
    colors: IColors | null = null;
    allThemes: { [key: string]: IColors } | null = null;

    @action saveTheme = (data: string): void => {
        this.theme = data;
    }

    @action saveColors = (data: IColors): void => {
        this.colors = data;
    }

    @action saveAllColors = (data: { [key: string]: IColors }): void => {
        this.allThemes = data;
    }

}

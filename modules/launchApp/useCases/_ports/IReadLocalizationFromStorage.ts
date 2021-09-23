export interface IReadLocale {
    readLocalization: () => Promise<string | null>;
    readTranslation: () => Promise<object | null>;
}
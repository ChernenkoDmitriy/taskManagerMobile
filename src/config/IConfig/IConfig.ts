import { ILinks } from "./ILinks";
import { IStoreServices } from "./IStoreServices";

export interface IConfig {
    LINKS: ILinks;
    STORAGE_SERVICES: IStoreServices;
    setLinks: (links: ILinks) => void;
}

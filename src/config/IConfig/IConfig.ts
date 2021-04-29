import { ILinks } from "./ILinks";
import { IStorageServices } from "./IStorageServices";

export interface IConfig {
    LINKS: ILinks;
    STORAGE_SERVICES: IStorageServices;
    setLinks: (links: ILinks) => void;
}

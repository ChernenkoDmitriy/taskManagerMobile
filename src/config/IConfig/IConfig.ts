import { ILinks } from "./ILinks";
import { IStorageServices } from "./IStorageServices";

export interface IConfig extends ILinks, IStorageServices {
    setLinks: (links: ILinks) => void;
}

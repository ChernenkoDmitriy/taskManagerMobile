import { INote } from "../../../common/models/INote";

export interface INotePersistance {
    save: (notes: INote[]) => Promise<void>;
}

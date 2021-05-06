import { INote } from "../../models/INote";

export interface INotePersistance {
    save: (notes: INote[]) => Promise<void>;
}

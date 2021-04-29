import { INote } from "../../../../common/models/INote";

export interface INotePersistance {
    save: (note: INote) => Promise<void>;
}

import { INote } from "../../../../common/models/INote";

export interface IEditNote {
    editNote: (notes: INote[], note: INote) => INote[];
}

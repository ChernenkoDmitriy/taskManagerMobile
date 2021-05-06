import { INote } from "../../../../common/models/INote";

export interface IAddNote {
    addNote: (notes: INote[], note: INote) => INote[];
}

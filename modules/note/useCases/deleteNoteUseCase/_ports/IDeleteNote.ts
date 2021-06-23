import { INote } from "../../../../common/models/INote";

export interface IDeleteNote {
    deleteNote: (notes: INote[], uid: string) => INote[];
}

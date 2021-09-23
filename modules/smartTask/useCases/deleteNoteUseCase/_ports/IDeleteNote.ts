import { INote } from "../../../../common/models/ISmartTask";

export interface IDeleteNote {
    deleteNote: (notes: INote[], uid: string) => INote[];
}

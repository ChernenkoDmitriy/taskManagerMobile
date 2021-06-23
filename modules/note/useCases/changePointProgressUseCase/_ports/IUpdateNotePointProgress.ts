import { INote } from "../../../../common/models/INote";

export interface IUpdateNotePointProgress {
    updateNotePointProgress: (note: INote, uid: string) => INote;
}

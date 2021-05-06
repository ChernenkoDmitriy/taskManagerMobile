import { INote, NotePoint } from "../../../../common/models/INote";

export interface ICreateNote {
    createNote: (title: string, content: string, points: NotePoint[]) => INote;
}

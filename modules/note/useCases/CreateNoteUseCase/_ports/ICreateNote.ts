import { INote, NotePoint, Priority } from "../../../../common/models/INote";

export interface ICreateNote {
    createNote: (title: string, content: string, points: NotePoint[], priority: Priority) => INote;
}

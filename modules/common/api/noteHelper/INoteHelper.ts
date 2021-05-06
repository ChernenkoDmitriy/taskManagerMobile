import { IAddNote } from "../../../createNote/useCases/CreateNoteUseCase/_ports/IAddNote";
import { ICreateNote } from "../../../createNote/useCases/CreateNoteUseCase/_ports/ICreateNote";
import { IEditNote } from "../../../noteDetail/useCases/changePointProgressUseCase/_ports/IEditNote";
import { IUpdateNotePointProgress } from "../../../noteDetail/useCases/changePointProgressUseCase/_ports/IUpdateNotePointProgress";
import { IDeleteNote } from "../../../noteDetail/useCases/deleteNoteUseCase/_ports/IDeleteNote";
import { NotePoint } from "../../models/INote";

export interface INoteHelper extends ICreateNote, IAddNote, IUpdateNotePointProgress, IEditNote, IDeleteNote {
    createNotePoint: () => NotePoint;
}
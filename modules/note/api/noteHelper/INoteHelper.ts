import { IAddNote } from "../../useCases/CreateNoteUseCase/_ports/IAddNote";
import { ICreateNote } from "../../useCases/CreateNoteUseCase/_ports/ICreateNote";
import { IEditNote } from "../../useCases/changePointProgressUseCase/_ports/IEditNote";
import { IUpdateNotePointProgress } from "../../useCases/changePointProgressUseCase/_ports/IUpdateNotePointProgress";
import { IDeleteNote } from "../../useCases/deleteNoteUseCase/_ports/IDeleteNote";
import { NotePoint } from "../../../common/models/INote";

export interface INoteHelper extends ICreateNote, IAddNote, IUpdateNotePointProgress, IEditNote, IDeleteNote {
    createNotePoint: () => NotePoint;
}
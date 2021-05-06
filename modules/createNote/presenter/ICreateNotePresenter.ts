import { NotePoint } from "../../common/models/INote";
import { ICreateNoteController } from "./CreateNoteController";

export interface ICreateNotePresenter {
    controller: ICreateNoteController;
    state: {
        readonly isCreateEnabled: boolean;
        readonly notePoints: NotePoint[];
        readonly noteTitle: string;
        readonly noteContent: string;
    };
}

import { INote } from "../../common/models/INote";
import { INoteDetailController } from "./NoteDetailController";

export interface INoteDetailPresenter {
    controller: INoteDetailController;
    state: {
        readonly chosenNote: INote;
    };
}

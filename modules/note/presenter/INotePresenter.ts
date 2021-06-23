import { INote, Priority } from "../../common/models/INote";
import { INoteController } from "./NoteController";

export interface INotePresenter {
    controller: INoteController;
    state: {
        readonly notes: INote[];
        readonly priorities: Priority[];
        readonly chosenNote: INote;
        readonly isOpenedPriorityMenu: boolean;
        readonly isCreateEnabled: boolean;
        readonly isEdit: boolean;
    };
}

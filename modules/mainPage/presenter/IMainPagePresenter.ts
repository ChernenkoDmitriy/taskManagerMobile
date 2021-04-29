import { INote } from "../../common/models/INote";
import { IMainPageController } from "./MainPageController";

export interface IMainPagePresenter {
    controller: IMainPageController;
    state: {
        readonly notes: INote[];
    };
}

import { ISmartTask } from "../../common/models/ISmartTask";
import { ISmartTaskController } from "./SmartTaskController";

export interface ISmartTaskPresenter {
    controller: ISmartTaskController;
    state: {
        readonly chosenSmartTask: ISmartTask;
        readonly isLoading: boolean;
    };
}

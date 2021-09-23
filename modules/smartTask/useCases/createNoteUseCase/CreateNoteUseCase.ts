import { ISmartTask } from "../../../common/models/ISmartTask";
import { ISmartTaskHelper } from "../../api/smartTaskHelper/ISmartTaskHelper";
import { ISendCreateSmartTask } from "../_ports/ISendCreateRoom";

export interface ICreateSmartTaskUseCase {
    createSmartTask: (smartTask: ISmartTask, roomId: string) => Promise<void>;
}

export class CreateSmartTaskUseCase implements ICreateSmartTaskUseCase {
    constructor(
        private smartTaskHelper: ISmartTaskHelper,
        private smartTaskRequester: ISendCreateSmartTask,
    ) { }

    createSmartTask = async (smartTask: ISmartTask, roomId: string) => {
        await this.smartTaskRequester.createSmartTask(smartTask, roomId);
        this.smartTaskHelper.saveChosenTaskTask();
    }

}

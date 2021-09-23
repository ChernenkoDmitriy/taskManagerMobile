
import { IRoom } from "../../../common/models/IRoom";
import { ISmartTask } from "../../../common/models/ISmartTask";
import { IUser } from "../../../common/models/IUser";
import { IRepository } from "../../../common/repository/IRepository";
import { ISmartTaskHelper } from "../../api/smartTaskHelper/ISmartTaskHelper";
import { ISendUpdateSmartTask } from "../_ports/ISendUpdateSmartTask";

export interface IUpdateSmartTaskUseCase {
    updateSmartTask: () => Promise<void>;
}

export class UpdateSmartTaskUseCase implements IUpdateSmartTaskUseCase {
    constructor(
        private chosenSmartTaskStore: IRepository<ISmartTask>,
        private userStore: IRepository<IUser>,
        private chosenRoomStore: IRepository<IRoom>,
        private smartTaskRequester: ISendUpdateSmartTask,
        private smartTaskHelper: ISmartTaskHelper,
    ) { }

    updateSmartTask = async () => {
        try {
            const smartTask = this.chosenSmartTaskStore.data as ISmartTask;
            const userId = this.userStore.data?.id as string;
            const roomId = this.chosenRoomStore.data?.id as string;
            const updatedTask = await this.smartTaskRequester.updateSmartTask(smartTask, roomId, userId);
            if (updatedTask) {
                this.smartTaskHelper.saveChosenTaskTask();
            }
        } catch (error) {
            console.warn('UpdateSmartTaskUseCase -> updateSmartTask: ', error);
        }
    }

}

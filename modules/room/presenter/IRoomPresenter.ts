import { IRoom } from "../../common/models/IRoom";
import { ISmartTask } from "../../common/models/ISmartTask";
import { IUser } from "../../common/models/IUser";
import { IRoomController } from "./RoomController";

export interface IRoomPresenter {
    controller: IRoomController;
    state: {
        readonly roomTasks: ISmartTask[],
        readonly user: IUser,
        readonly chosenRoom: IRoom,
        readonly isLoading: boolean,
    };
}

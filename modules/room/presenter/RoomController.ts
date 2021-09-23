import { IRoomState } from "./RoomState";
import { IEditRoomUseCase } from "../useCases/EditRoomUseCase";
import { IGetRoomTasksUseCase } from "../useCases/getRoomTasksUseCase/GetRoomTasksUseCase";
import { ISmartTask } from "../../common/models/ISmartTask";

export interface IRoomController {
    onSetChosenSmartTask: (data: ISmartTask) => void;
    getRoomTasks: () => Promise<void>;
    onUnmounted: () => void;
}

export class RoomController implements IRoomController {
    constructor(
        private state: IRoomState,
        private editRoomUseCase: IEditRoomUseCase,
        private getRoomTasksUseCase: IGetRoomTasksUseCase,
        private setChosenSmartTask: (data: ISmartTask) => void,
    ) { }

    onSetChosenSmartTask = (data: ISmartTask) => {
        this.setChosenSmartTask(data);
    }

    getRoomTasks = async () => {
        const { user, chosenRoom } = this.state;
        await this.getRoomTasksUseCase.getRoomTasks(chosenRoom.id, user.id);
    }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}

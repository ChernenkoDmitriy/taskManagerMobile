import { ISmartTask } from "../../../common/models/ISmartTask";

export interface IGetRoomTasksRequester {
    getRoomTasks: (roomId: string, userId: string) => Promise<{ error: boolean, data: ISmartTask[], messageKey: string }>;
}

import { ISmartTask } from "../../../common/models/ISmartTask";
import { IRepository } from "../../../common/repository/IRepository";
import { IGetRoomTasksRequester } from "../_ports/IGetRoomTasksRequester";

export interface IGetRoomTasksUseCase {
    getRoomTasks: (roomId: string, userId: string) => Promise<void>;
}

export class GetRoomTasksUseCase implements IGetRoomTasksUseCase {
    constructor(
        private isLoadingStore: IRepository<boolean>,
        private roomTasksStore: IRepository<ISmartTask[]>,
        private errorStore: IRepository<{ isError: boolean; message: string }>,
        private roomRequester: IGetRoomTasksRequester,
    ) { }

    getRoomTasks = async (roomId: string, userId: string) => {
        try {
            this.isLoadingStore.save(true);
            const response = await this.roomRequester.getRoomTasks(roomId, userId);
            if (response.error) {
                this.errorStore.save({ isError: true, message: response.messageKey as string })
            } else {
                this.roomTasksStore.save(response);
            }
            this.isLoadingStore.save(false);
        } catch (error) {
            console.warn('GetRoomTasksUseCase -> getRoomTasks: ', error);
        }
    }

}

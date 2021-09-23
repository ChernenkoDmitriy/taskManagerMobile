import { IRoom } from "../../common/models/IRoom";
import { ISmartTask } from "../../common/models/ISmartTask";
import { IUser } from "../../common/models/IUser";
import { IRepository } from "../../common/repository/IRepository";

export interface IRoomState {
    readonly roomTasks: ISmartTask[],
    readonly user: IUser,
    readonly chosenRoom: IRoom,
    readonly isLoading: boolean,
    setIsLoading: (data: boolean) => void;
    setDefaultState: () => void;
}

export class RoomState implements IRoomState {
    constructor(
        private chosenRoomStore: IRepository<IRoom>,
        private roomTasksStore: IRepository<ISmartTask[]>,
        private userStore: IRepository<IUser>,
        private isLoadingStore: IRepository<boolean>,
    ) { }

    get roomTasks() {
        return this.roomTasksStore.data ?? [];
    }

    get isLoading() {
        return this.isLoadingStore.data ?? false;
    }

    setIsLoading = (data: boolean) => {
        this.isLoadingStore.save(data);
    }

    get user() {
        return this.userStore.data ?? {} as IUser;
    }

    get chosenRoom() {
        return this.chosenRoomStore.data ?? {} as IRoom;
    }

    setDefaultState = () => {
        this.chosenRoomStore.save(null);
        this.roomTasksStore.save(null);
        this.isLoadingStore.save(null);
    }

}

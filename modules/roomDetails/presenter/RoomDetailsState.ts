import { IRoom } from "../../common/models/IRoom";
import { IUser } from "../../common/models/IUser";
import { IRepository } from "../../common/repository/IRepository";

export interface IRoomDetailsState {
    readonly user: IUser,
    readonly chosenRoom: IRoom,
    isModalVisible: boolean,
    isModalLeaveGroupVisible: boolean,
    setDefaultState: () => void;
}

export class RoomDetailsState implements IRoomDetailsState {
    constructor(
        private isModalLeaveGroupVisibleStore: IRepository<boolean>,
        private isModalVisibleStore: IRepository<boolean>,
        private chosenRoomStore: IRepository<IRoom>,
        private userStore: IRepository<IUser>,
    ) { }

    get isModalLeaveGroupVisible() {
        return this.isModalLeaveGroupVisibleStore.data ?? false;
    }

    set isModalLeaveGroupVisible(data: boolean) {
        this.isModalLeaveGroupVisibleStore.save(data);
    }

    get isModalVisible() {
        return this.isModalVisibleStore.data ?? false;
    }

    set isModalVisible(data: boolean) {
        this.isModalVisibleStore.save(data);
    }

    get user() {
        return this.userStore.data ?? {} as IUser;
    }

    get chosenRoom() {
        return this.chosenRoomStore.data ?? {} as IRoom;
    }

    setDefaultState = () => {
        this.isModalVisibleStore.save(null);
    }

}

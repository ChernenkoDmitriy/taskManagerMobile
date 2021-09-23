import { IRoomsListState } from "./RoomsListState";
import { IGetUserRoomsUseCase } from "../useCases/GetUserRoomsUseCase";
import { IRepository } from "../../common/repository/IRepository";
import { IRoom } from "../../common/models/IRoom";

export interface IRoomsListController {
    onGetUserRooms: () => Promise<void>;
    onChoseRoom: (room: IRoom) => void;
}

export class RoomsListController implements IRoomsListController {
    constructor(
        private state: IRoomsListState,
        private getUserRoomsUseCase: IGetUserRoomsUseCase,
        private chosenRoomStore: IRepository<IRoom>,
    ) { }

    onChoseRoom = (room: IRoom) => {
        this.chosenRoomStore.save(room);
    }

    onGetUserRooms = async () => {
        await this.getUserRoomsUseCase.getUserRooms();
    }

}

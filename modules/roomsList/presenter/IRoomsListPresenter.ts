import { IRoom } from "../../common/models/IRoom";
import { IRoomsListController } from "./RoomsListController";

export interface IRoomsListPresenter {
    controller: IRoomsListController;
    state: {  
        readonly userRooms: IRoom[],
        readonly isLoading: boolean,
    };
}

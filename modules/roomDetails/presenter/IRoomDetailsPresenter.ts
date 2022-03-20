import { IRoomDetailsController } from "./RoomDetailsController";
import { IRoomDetailsState } from "./RoomDetailsState";

export interface IRoomDetailsPresenter {
    controller: IRoomDetailsController;
    state: IRoomDetailsState;
}

import { IRoomDetailsState } from "./RoomDetailsState";
import { ILeaveRoomUseCase } from "../useCases/LeaveRoomUseCase";

export interface IRoomDetailsController {
    onLeaveGroup: () => Promise<void>;
    onShowLeaveGroupPopup: () => void;
    onCloseLeaveGroupPopup: () => void;
    onOpenModal: () => void;
    onCloseModal: () => void;
    onUnmounted: () => void;
}

export class RoomDetailsController implements IRoomDetailsController {
    constructor(
        private state: IRoomDetailsState,
        private leaveRoomUseCase: ILeaveRoomUseCase,
    ) { }

    onShowLeaveGroupPopup = () => {
        this.state.isModalLeaveGroupVisible = true;
    }

    onCloseLeaveGroupPopup = () => {
        this.state.isModalLeaveGroupVisible = false;
    }

    onLeaveGroup = async () => {
        this.onCloseLeaveGroupPopup();
        this.onCloseModal();
    }

    onOpenModal = () => {
        this.state.isModalVisible = true;
    }

    onCloseModal = () => {
        this.state.isModalVisible = false;
    }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}

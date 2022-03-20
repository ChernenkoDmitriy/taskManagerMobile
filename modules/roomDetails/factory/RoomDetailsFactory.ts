import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { IRoomDetailsPresenter } from "../presenter/IRoomDetailsPresenter";
import { RoomDetailsController } from "../presenter/RoomDetailsController";
import { RoomDetailsState } from "../presenter/RoomDetailsState";
import { LeaveRoomUseCase } from "../useCases/LeaveRoomUseCase";

export class RoomDetailsFactory {
    private static presenter: IRoomDetailsPresenter;

    static get() {
        if (!RoomDetailsFactory.presenter) {
            RoomDetailsFactory.presenter = new RoomDetailsFactory().createPresenter();
        }
        return RoomDetailsFactory.presenter;
    }

    private createPresenter = () => {
        const { chosenRoomStore, userStore } = BaseFactory.get();
        
        const leaveRoomUseCase = new LeaveRoomUseCase();

        const isModalVisibleStore = new MobXRepository<boolean>();
        const isModalLeaveGroupVisibleStore = new MobXRepository<boolean>();

        const state = new RoomDetailsState(isModalLeaveGroupVisibleStore, isModalVisibleStore, chosenRoomStore, userStore);
        const controller = new RoomDetailsController(state, leaveRoomUseCase,);

        return { controller, state };
    }

}

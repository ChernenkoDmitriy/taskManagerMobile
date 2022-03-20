import { Logger } from "../../../libs/logger";
import { AxiosRequester } from "../../../libs/requester";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { ISmartTask } from "../../common/models/ISmartTask";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { RoomDetailsFactory } from "../../roomDetails/factory/RoomDetailsFactory";
import { SmartTaskFactory } from "../../smartTask/factory/SmartTaskFactory";
import { RoomRequester } from "../api/RoomRequester";
import { IRoomPresenter } from "../presenter/IRoomPresenter";
import { RoomController } from "../presenter/RoomController";
import { RoomState } from "../presenter/RoomState";
import { EditRoomUseCase } from "../useCases/EditRoomUseCase";
import { GetRoomTasksUseCase } from "../useCases/getRoomTasksUseCase/GetRoomTasksUseCase";

export class RoomFactory {
    private static presenter: IRoomPresenter;

    static get() {
        if (!RoomFactory.presenter) {
            RoomFactory.presenter = new RoomFactory().createPresenter();
        }
        return RoomFactory.presenter;
    }

    private createPresenter = () => {
        const { chosenRoomStore, userStore, roomSmartTasksStore } = BaseFactory.get();
        const { controller: { onOpenModal } } = RoomDetailsFactory.get();
        const { controller: smartTaskController } = SmartTaskFactory.get();
        const isLoadingStore = new MobXRepository<boolean>();
        const errorStore = new MobXRepository<{ isError: boolean; message: string }>();

        const requester = new AxiosRequester();
        const config = new Config();
        const logger = new Logger();
        const roomRequester = new RoomRequester(requester, config, logger);
        const getRoomTasksUseCase = new GetRoomTasksUseCase(isLoadingStore, roomSmartTasksStore, errorStore, roomRequester);
        const editRoomUseCase = new EditRoomUseCase();

        const state = new RoomState(chosenRoomStore, roomSmartTasksStore, userStore, isLoadingStore);
        const controller = new RoomController(state, editRoomUseCase, getRoomTasksUseCase, smartTaskController.setChosenSmartTask, onOpenModal);

        return { controller, state };
    }

}

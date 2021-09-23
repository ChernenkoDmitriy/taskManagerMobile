import { Logger } from "../../../libs/logger";
import { AxiosRequester } from "../../../libs/requester";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { IRoom } from "../../common/models/IRoom";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { GetRoomsRequester } from "../api/GetRoomsRequester";
import { IRoomsListPresenter } from "../presenter/IRoomsListPresenter";
import { RoomsListController } from "../presenter/RoomsListController";
import { RoomsListState } from "../presenter/RoomsListState";
import { GetUserRoomsUseCase } from "../useCases/GetUserRoomsUseCase";

export class RoomsListFactory {
    private static presenter: IRoomsListPresenter;

    static get() {
        if (!RoomsListFactory.presenter) {
            RoomsListFactory.presenter = new RoomsListFactory().createPresenter();
        }
        return RoomsListFactory.presenter;
    }

    private createPresenter = () => {
        const { userStore, chosenRoomStore, userRoomsStore } = BaseFactory.get();
        const isLoadingStore = new MobXRepository<boolean>();

        const requester = new AxiosRequester();
        const config = new Config();
        const logger = new Logger();
        const roomRequester = new GetRoomsRequester(requester, config, logger);

        const getUserRoomsUseCase = new GetUserRoomsUseCase(isLoadingStore, userStore, userRoomsStore, roomRequester);

        const state = new RoomsListState(userRoomsStore, isLoadingStore);
        const controller = new RoomsListController(state, getUserRoomsUseCase, chosenRoomStore);

        return { controller, state };
    }

}

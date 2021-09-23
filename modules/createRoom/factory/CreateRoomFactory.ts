import { ICreateRoomPresenter } from "../presenter/ICreateRoomPresenter";
import { CreateRoomController } from "../presenter/CreateRoomController";
import { CreateRoomState } from "../presenter/CreateRoomState";
import { CreateRoomUseCase } from "../useCases/CreateRoomUseCase";
import { FindUsersUseCase } from "../useCases/FindUsersUseCase";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { IRoomMember } from "../../common/models/IRoomMember";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Logger } from "../../../libs/logger";
import { AxiosRequester } from "../../../libs/requester";
import { Config } from "../../../src/config";
import { RoomRequester } from "../api/RoomRequester";

export class CreateRoomFactory {
    private static presenter: ICreateRoomPresenter;

    static get() {
        if (!CreateRoomFactory.presenter) {
            CreateRoomFactory.presenter = new CreateRoomFactory().createPresenter();
        }
        return CreateRoomFactory.presenter;
    }

    private createPresenter = () => {
        const { userStore, chosenRoomStore, userRoomsStore } = BaseFactory.get();
        const searchUsersStringStore = new MobXRepository<string>();
        const roomNameStore = new MobXRepository<string>();
        const isLoadingStore = new MobXRepository<boolean>();
        const chosenCandidatesStore = new MobXRepository<IRoomMember[]>();
        const membersCandidatesStore = new MobXRepository<IRoomMember[]>();

        const requester = new AxiosRequester();
        const config = new Config();
        const logger = new Logger();
        const roomRequester = new RoomRequester(requester, config, logger);

        const findUsersUseCase = new FindUsersUseCase(roomRequester, membersCandidatesStore, isLoadingStore);
        const createRoomUseCase = new CreateRoomUseCase(isLoadingStore, roomNameStore, userStore, chosenRoomStore, userRoomsStore, roomRequester);

        const state = new CreateRoomState(roomNameStore, searchUsersStringStore, chosenCandidatesStore, membersCandidatesStore, isLoadingStore, userStore);
        const controller = new CreateRoomController(state, createRoomUseCase, findUsersUseCase, chosenRoomStore);

        return { controller, state };
    }

}

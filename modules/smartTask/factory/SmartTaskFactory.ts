import { Logger } from "../../../libs/logger";
import { AxiosRequester } from "../../../libs/requester";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { ISmartTask } from "../../common/models/ISmartTask";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { SmartTaskHelper } from "../api/smartTaskHelper/SmartTaskHelper";
import { SmartTaskRequester } from "../api/smartTaskRequester/SmartTaskRequester";
import { ISmartTaskPresenter } from "../presenter/ISmartTaskPresenter";
import { SmartTaskController } from "../presenter/SmartTaskController";
import { SmartTaskState } from "../presenter/SmartTaskState";
import { CreateSmartTaskUseCase } from "../useCases/createNoteUseCase/CreateNoteUseCase";
import { UpdateSmartTaskUseCase } from "../useCases/updateSmartTaskUseCase/UpdateSmartTaskUseCase";

export class SmartTaskFactory {
    private static presenter: ISmartTaskPresenter;

    static get() {
        if (!SmartTaskFactory.presenter) {
            SmartTaskFactory.presenter = new SmartTaskFactory().createPresenter();
        }
        return SmartTaskFactory.presenter;
    }

    private createPresenter = () => {
        const { chosenRoomStore, roomSmartTasksStore, chosenSmartTaskStore, userStore } = BaseFactory.get();
        const isLoadingStore = new MobXRepository<boolean>();

        const smartTaskHelper = new SmartTaskHelper(roomSmartTasksStore, chosenSmartTaskStore);
        const requester = new AxiosRequester();
        const config = new Config();
        const logger = new Logger();
        const smartTaskRequester = new SmartTaskRequester(requester, config, logger);

        const createSmartTaskUseCase = new CreateSmartTaskUseCase(smartTaskHelper, smartTaskRequester);
        const updateSmartTaskUseCase = new UpdateSmartTaskUseCase(chosenSmartTaskStore, userStore, chosenRoomStore, smartTaskRequester, smartTaskHelper);

        const state = new SmartTaskState(chosenSmartTaskStore, isLoadingStore);
        const controller = new SmartTaskController(state, smartTaskHelper, chosenRoomStore, createSmartTaskUseCase, updateSmartTaskUseCase);

        return { controller, state };
    }

}

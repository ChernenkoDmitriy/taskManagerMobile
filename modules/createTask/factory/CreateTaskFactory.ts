import { ICreateTaskPresenter } from "../presenter/ICreateTaskPresenter";
import { CreateTaskController } from "../presenter/CreateTaskController";
import { CreateTaskState } from "../presenter/CreateTaskState";
import { CreateTaskUseCase } from "../useCases/CreateTaskUseCase";
import { CreateNoteUseCase } from "../useCases/CreateNoteUseCase/CreateNoteUseCase";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { NotePersistance } from "../api/notePersistance/NotePersistance";
import { AsyncStoreStorage } from "../../../libs/storage";
import { Config } from "../../../src/config";
import { NoteCreator } from "../api/noteCreator/NoteCreator";
import { MainPageFactory } from "../../mainPage/factory/MainPageFactory";


export class CreateTaskFactory {
    private static presenter: ICreateTaskPresenter;

    static get() {
        if (!CreateTaskFactory.presenter) {
            CreateTaskFactory.presenter = new CreateTaskFactory().createPresenter();
        }
        return CreateTaskFactory.presenter;
    }

    private createPresenter = () => {
        // @ts-ignore
        const { notesStore } = MainPageFactory.get();
        const noteTitleStore = new MobXRepository<string>();
        const noteContentStore = new MobXRepository<string>();

        const config = new Config();
        const storage = new AsyncStoreStorage();
        const noteCreator = new NoteCreator();
        const notePersistance = new NotePersistance(storage, config.STORAGE_SERVICES, notesStore);
        const createTaskUseCase = new CreateTaskUseCase();
        const createNoteUseCase = new CreateNoteUseCase(noteCreator, notePersistance);

        const state = new CreateTaskState(noteTitleStore, noteContentStore);
        const controller = new CreateTaskController(state, createTaskUseCase, createNoteUseCase,);
        return { controller, state };
    }

}


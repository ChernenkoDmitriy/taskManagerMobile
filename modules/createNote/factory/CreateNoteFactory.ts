import { ICreateNotePresenter } from "../presenter/ICreateNotePresenter";
import { CreateNoteController } from "../presenter/CreateNoteController";
import { CreateNoteState } from "../presenter/CreateNoteState";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { NotePersistance } from "../../common/api/notePersistance/NotePersistance";
import { AsyncStoreStorage } from "../../../libs/storage";
import { Config } from "../../../src/config";
import { CreateNoteUseCase } from "../useCases/CreateNoteUseCase/CreateNoteUseCase";
import { NotePoint } from "../../common/models/INote";
import { NoteHelper } from "../../common/api/noteHelper/NoteHelper";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";

export class CreateNoteFactory {
    private static presenter: ICreateNotePresenter;

    static get() {
        if (!CreateNoteFactory.presenter) {
            CreateNoteFactory.presenter = new CreateNoteFactory().createPresenter();
        }
        return CreateNoteFactory.presenter;
    }

    private createPresenter = () => {
        const { notesStore } = BaseFactory.get();
        const isCreateEnabledStore = new MobXRepository<boolean>();
        const noteTitleStore = new MobXRepository<string>();
        const noteContentStore = new MobXRepository<string>();
        const notePointsStore = new MobXRepository<NotePoint[]>();

        const noteHelper = new NoteHelper();
        const config = new Config();
        const storage = new AsyncStoreStorage();
        const notePersistance = new NotePersistance(storage, config.STORAGE_SERVICES, notesStore);
        const createNoteUseCase = new CreateNoteUseCase(notesStore, noteHelper, notePersistance);

        const state = new CreateNoteState(noteTitleStore, noteContentStore, notePointsStore, isCreateEnabledStore);
        const controller = new CreateNoteController(state, noteHelper, createNoteUseCase);
        return { controller, state };
    }

}


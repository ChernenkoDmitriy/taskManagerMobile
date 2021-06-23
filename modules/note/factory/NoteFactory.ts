import { MobXRepository } from "../../common/repository/MobXRepository";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { AsyncStoreStorage } from "../../../libs/storage";
import { Config } from "../../../src/config";
import { NoteHelper } from "../api/noteHelper/NoteHelper";
import { NotePersistance } from "../api/notePersistance/NotePersistance";
import { INotePresenter } from "../presenter/INotePresenter";
import { DeleteNoteUseCase } from "../useCases/deleteNoteUseCase/DeleteNoteUseCase";
import { CreateNoteUseCase } from "../useCases/CreateNoteUseCase/CreateNoteUseCase";
import { EditNoteUseCase } from "../useCases/editNoteUseCase/EditNoteUseCase";
import { NoteState } from "../presenter/NoteState";
import { NoteController } from "../presenter/NoteController";
import { ChangePointProgressUseCase } from "../useCases/changePointProgressUseCase/ChangePointProgressUseCase";

export class NoteFactory {
    private static presenter: INotePresenter;

    static get() {
        if (!NoteFactory.presenter) {
            NoteFactory.presenter = new NoteFactory().createPresenter();
        }
        return NoteFactory.presenter;
    }

    private createPresenter = () => {
        const { chosenNoteStore, notesStore } = BaseFactory.get();
        const isCreateEnabledStore = new MobXRepository<boolean>();
        const isEditStore = new MobXRepository<boolean>();
        const isOpenedPriorityMenuStore = new MobXRepository<boolean>();

        const noteHelper = new NoteHelper();
        const config = new Config();
        const storage = new AsyncStoreStorage();
        const notePersistance = new NotePersistance(storage, config.STORAGE_SERVICES, notesStore);
        const deleteNoteUseCase = new DeleteNoteUseCase(notesStore, noteHelper, notePersistance);
        const createNoteUseCase = new CreateNoteUseCase(notesStore, noteHelper, notePersistance);
        const editNoteUseCase = new EditNoteUseCase(chosenNoteStore, notesStore, noteHelper, notePersistance);
        const changePointProgressUseCase = new ChangePointProgressUseCase(notesStore, chosenNoteStore, noteHelper, notePersistance);

        const state = new NoteState(chosenNoteStore, isOpenedPriorityMenuStore, isEditStore, isCreateEnabledStore, notesStore);
        const controller = new NoteController(state, noteHelper, deleteNoteUseCase, createNoteUseCase, editNoteUseCase, changePointProgressUseCase);

        return { controller, state };
    }

}

import { AsyncStoreStorage } from "../../../libs/storage";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { NotePersistance } from "../../common/api/notePersistance/NotePersistance";
import { INoteDetailPresenter } from "../presenter/INoteDetailPresenter";
import { NoteDetailController } from "../presenter/NoteDetailController";
import { NoteDetailState } from "../presenter/NoteDetailState";
import { DeleteNoteUseCase } from "../useCases/deleteNoteUseCase/DeleteNoteUseCase";
import { NoteHelper } from "../../common/api/noteHelper/NoteHelper";
import { ChangePointProgressUseCase } from "../useCases/changePointProgressUseCase/ChangePointProgressUseCase";

export class NoteDetailFactory {
    private static presenter: INoteDetailPresenter;

    static get() {
        if (!NoteDetailFactory.presenter) {
            NoteDetailFactory.presenter = new NoteDetailFactory().createPresenter();
        }
        return NoteDetailFactory.presenter;
    }

    private createPresenter = () => {
        const { chosenNoteStore, notesStore } = BaseFactory.get();

        const config = new Config();
        const storage = new AsyncStoreStorage();
        const noteHelper = new NoteHelper();
        const notePersistance = new NotePersistance(storage, config.STORAGE_SERVICES, notesStore);

        const deleteNoteUseCase = new DeleteNoteUseCase(notesStore, noteHelper, notePersistance);
        const changePointProgressUseCase = new ChangePointProgressUseCase(notesStore, chosenNoteStore, noteHelper, notePersistance);

        const state = new NoteDetailState(chosenNoteStore);
        const controller = new NoteDetailController(state, deleteNoteUseCase, changePointProgressUseCase,);

        return { controller, state, chosenNoteStore };
    }

}

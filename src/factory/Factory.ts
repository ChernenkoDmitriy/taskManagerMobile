import { CreateNoteFactory } from "../../modules/createNote/factory/CreateNoteFactory";
import { LaunchAppFactory } from "../../modules/launchApp/factory/LaunchAppFactory";
import { MainPageFactory } from "../../modules/mainPage/factory/MainPageFactory";
import { NoteDetailFactory } from "../../modules/noteDetail/factory/NoteDetailFactory";
import { BaseFactory } from "../baseFactory/BaseFactory";
import { IPresenters } from "./IPresenters";

export class Factory {

    static get = (type: IPresenters, ..._args: any) => {
        switch (type) {
            case 'noteDetailPresenter':
                return NoteDetailFactory.get();
            case 'createNotePresenter':
                return CreateNoteFactory.get();
            case 'mainPagePresenter':
                return MainPageFactory.get();
            case 'launchAppPresenter':
                return LaunchAppFactory.get();
            case 'basePresenter':
                return BaseFactory.get();
            default:
                return undefined;
        }
    }

}

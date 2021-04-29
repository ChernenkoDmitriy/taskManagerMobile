import { CreateTaskFactory } from "../../modules/createTask/factory/CreateTaskFactory";
import { LaunchAppFactory } from "../../modules/launchApp/factory/LaunchAppFactory";
import { MainPageFactory } from "../../modules/mainPage/factory/MainPageFactory";
import { BaseFactory } from "../baseFactory/BaseFactory";
import { IPresenters } from "./IPresenters";

export class Factory {

    static get = (type: IPresenters, ..._args: any) => {
        switch (type) {
            case 'createTaskPresenter':
                return CreateTaskFactory.get();
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

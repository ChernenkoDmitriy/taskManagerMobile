import { LaunchAppFactory } from "../../modules/launchApp/factory/LaunchAppFactory";
import { BaseFactory } from "../baseFactory/BaseFactory";
import { IPresenters } from "./IPresenters";
import { ProfileFactory } from "../../modules/profile/factory/ProfileFactory";
import { ChangeLanguageFactory } from "../../modules/changeLanguage/factory/ChangeLanguageFactory";
import { AuthorizationFactory } from "../../modules/authorization/factory/AuthorizationFactory";
import { RegistrationFactory } from "../../modules/registration/factory/RegistrationFactory";
import { SmartTaskFactory } from "../../modules/smartTask/factory/SmartTaskFactory";
import { RoomsListFactory } from "../../modules/roomsList/factory/RoomsListFactory";
import { CreateRoomFactory } from "../../modules/createRoom/factory/CreateRoomFactory";
import { RoomFactory } from "../../modules/room/factory/RoomFactory";

export class Factory {

    static get = (type: IPresenters, ..._args: any) => {
        switch (type) {
            case 'roomPresenter':
                return RoomFactory.get();
            case 'createRoomPresenter':
                return CreateRoomFactory.get();
            case 'roomsListPresenter':
                return RoomsListFactory.get();
            case 'smartTaskPresenter':
                return SmartTaskFactory.get();
            case 'registrationPresenter':
                return RegistrationFactory.get();
            case 'authorizationPresenter':
                return AuthorizationFactory.get();
            case 'changeLanguagePresenter':
                return ChangeLanguageFactory.get();
            case 'profilePresenter':
                return ProfileFactory.get();
            case 'launchAppPresenter':
                return LaunchAppFactory.get();
            case 'basePresenter':
                return BaseFactory.get();
            default:
                return undefined;
        }
    }

}

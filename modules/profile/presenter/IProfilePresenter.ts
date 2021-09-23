import { IUser } from "../../common/models/IUser";
import { IProfileController } from "./ProfileController";

export interface IProfilePresenter {
    controller: IProfileController;
    state: {
        readonly user: IUser | null;
    };
}

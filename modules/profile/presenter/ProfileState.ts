import { IUser } from "../../common/models/IUser";
import { IRepository } from "../../common/repository/IRepository";

export interface IProfileState {
    readonly user: IUser | null;
}

export class ProfileState implements IProfileState {
    constructor(
        private userStore: IRepository<IUser>,
    ) { }

    get user() {
        return this.userStore.data;
    }

}

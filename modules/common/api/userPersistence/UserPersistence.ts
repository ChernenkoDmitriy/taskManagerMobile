import { IStorageSet } from "../../../../libs/storage";
import { IStorageServices } from "../../../../src/config";
import { IUser } from "../../models/IUser";
import { IRepository } from "../../repository/IRepository";
import { IUserPersistence } from "./IUserPersistence";

export class UserPersistence implements IUserPersistence {
    constructor(
        private storage: IStorageSet,
        private userStore: IRepository<IUser>,
        private config: IStorageServices,
    ) { }

    save = async (user: IUser) => {
        try {
            this.userStore.save(user);
            await this.storage.set(this.config.STORAGE_SERVICES.USER, user);
        } catch (error) {
            console.warn('UserPersistence -> save: ', error)
        }
    }

}

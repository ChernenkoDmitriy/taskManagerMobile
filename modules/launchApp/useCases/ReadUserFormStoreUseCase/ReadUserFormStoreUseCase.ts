import { IUser } from "../../../common/models/IUser";
import { IRepository } from "../../../common/repository/IRepository";
import { IReadUserFromStoreUseCase } from "../_ports/IReadUserFromStorage";

export interface IReadUserUseCase {
    read: () => Promise<void>;
}

export class ReadUserFormStoreUseCase implements IReadUserUseCase {
    constructor(
        private storage: IReadUserFromStoreUseCase,
        private userStore: IRepository<IUser>,
    ) { }

    read = async () => {
        const user = await this.storage.readUser();
        user && this.userStore.save(user);
    }

}

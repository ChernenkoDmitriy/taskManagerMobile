import { IUser } from "../../../common/models/IUser";

export interface IReadUserFromStoreUseCase {
    readUser: () => Promise<IUser | null>;
}

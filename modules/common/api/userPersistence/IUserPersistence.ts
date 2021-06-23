import { IUser } from "../../../common/models/IUser";

export interface IUserPersistence {
    save: (user: IUser) => Promise<void>;
}

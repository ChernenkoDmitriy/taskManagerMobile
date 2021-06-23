import { IUser } from "../../../common/models/IUser";

export interface IAuthorize {
    authorize: (email: string, password: string) => Promise<IUser | null>;
}

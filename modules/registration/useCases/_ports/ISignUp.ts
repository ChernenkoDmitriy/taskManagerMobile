import { IUser } from "../../../common/models/IUser";

export interface ISignUp {
    signUp: (email: string, password: string, name: string) => Promise<IUser | null>;
}

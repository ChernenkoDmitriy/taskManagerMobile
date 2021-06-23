import { IUserPersistence } from "../../common/api/userPersistence/IUserPersistence";
import { ISignUp } from "./_ports/ISignUp";

export interface IRegisterUseCase {
    register: (email: string, password: string, name: string) => Promise<void>;
}

export class RegisterUseCase implements IRegisterUseCase {
    constructor(
        private signUpRequester: ISignUp,
        private userPersistence: IUserPersistence,
    ) { }

    register = async (email: string, password: string, name: string) => {
        try {
            const user = await this.signUpRequester.signUp(email, password, name);
            if (user) {
                await this.userPersistence.save(user);
            }
        } catch (error) {
            console.warn('RegisterUseCase -> register: ', error);
        }
    }

}

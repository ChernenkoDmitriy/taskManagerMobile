import { IUserPersistence } from "../../common/api/userPersistence/IUserPersistence";
import { IAuthorize } from "./_ports/IAuthorizeRequester";

export interface IAuthorizeUseCase {
    authorize: (email: string, password: string) => Promise<void>;
}

export class AuthorizeUseCase implements IAuthorizeUseCase {
    constructor(
        private authorizeRequester: IAuthorize,
        private userPersistence: IUserPersistence,
    ) { }

    authorize = async (email: string, password: string) => {
        try {
            const user = await this.authorizeRequester.authorize(email, password);
            if (user) {
                await this.userPersistence.save(user);
            }
        } catch (error) {
            console.warn('AuthorizeUseCase -> authorize: ', error);
        }
    }

}

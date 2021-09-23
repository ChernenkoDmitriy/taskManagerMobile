import { INotificationService } from "../../../libs/notificationService/NotificationServise";
import { ILocalization } from "../../../src/localization/ILocalization";
import { IUserPersistence } from "../../common/api/userPersistence/IUserPersistence";
import { ISignUp } from "./_ports/ISignUp";

export interface IRegisterUseCase {
    register: (email: string, password: string, name: string) => Promise<void>;
}

export class RegisterUseCase implements IRegisterUseCase {
    constructor(
        private signUpRequester: ISignUp,
        private userPersistence: IUserPersistence,
        private notificationService: INotificationService,
        private localization: ILocalization,
    ) { }

    register = async (email: string, password: string, name: string) => {
        try {
            const user = await this.signUpRequester.signUp(email, password, name);
            if (user) {
                await this.notificationService.register(user.id, this.localization.locale);
                this.userPersistence.save(user);
            }
        } catch (error) {
            console.warn('RegisterUseCase -> register: ', error);
        }
    }

}

import { INotificationService } from "../../../../libs/notificationService/NotificationServise";
import { ILocalization } from "../../../../src/localization/ILocalization";
import { IUserPersistence } from "../../../common/api/userPersistence/IUserPersistence";
import { IAuthorize } from "../_ports/IAuthorizeRequester";

export interface IAuthorizeUseCase {
    authorize: (email: string, password: string) => Promise<void>;
}

export class AuthorizeUseCase implements IAuthorizeUseCase {
    constructor(
        private authorizeRequester: IAuthorize,
        private userPersistence: IUserPersistence,
        private notificationService: INotificationService,
        private localization: ILocalization,
    ) { }

    authorize = async (email: string, password: string) => {
        try {
            const user = await this.authorizeRequester.authorize(email, password);
            if (user) {
                await this.notificationService.register(user.id, this.localization.locale);
                await this.userPersistence.save(user);
            }
        } catch (error) {
            console.warn('AuthorizeUseCase -> authorize: ', error);
        }
    }

}

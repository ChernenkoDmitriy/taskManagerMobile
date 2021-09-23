import { Logger } from "../../../libs/logger";
import { NotificationService } from "../../../libs/notificationService/NotificationServise";
import { AxiosRequester } from "../../../libs/requester";
import { AsyncStoreStorage } from "../../../libs/storage";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { Config } from "../../../src/config";
import { UserPersistence } from "../../common/api/userPersistence/UserPersistence";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { SignUpRequester } from "../api/SignUpRequester";
import { IRegistrationPresenter } from "../presenter/IRegistrationPresenter";
import { RegistrationController } from "../presenter/RegistrationController";
import { RegistrationState } from "../presenter/RegistrationState";
import { RegisterUseCase } from "../useCases/RegisterUseCase";

export class RegistrationFactory {
    private static presenter: IRegistrationPresenter;

    static get() {
        if (!RegistrationFactory.presenter) {
            RegistrationFactory.presenter = new RegistrationFactory().createPresenter();
        }
        return RegistrationFactory.presenter;
    }

    private createPresenter = () => {
        const { userStore, localization } = BaseFactory.get();
        const errorStore = new MobXRepository<{ isError: boolean; message: string }>();
        const isLoadingStore = new MobXRepository<boolean>();
        const isDisabledStore = new MobXRepository<boolean>();
        const emailStore = new MobXRepository<{ value: string; errorMessage: string }>();
        const nameStore = new MobXRepository<{ value: string; errorMessage: string }>();
        const passwordStore = new MobXRepository<{ value: string; errorMessage: string }>();

        const requester = new AxiosRequester();
        const config = new Config();
        const logger = new Logger();
        const storage = new AsyncStoreStorage();
        const notificationService = new NotificationService(config);
        const userPersistence = new UserPersistence(storage, userStore, config);
        const signUpRequester = new SignUpRequester(requester, config, emailStore, passwordStore, nameStore, errorStore, logger);

        const registerUseCase = new RegisterUseCase(signUpRequester, userPersistence, notificationService, localization);

        const state = new RegistrationState(errorStore, isLoadingStore, isDisabledStore, emailStore, nameStore, passwordStore);
        const controller = new RegistrationController(state, registerUseCase, config.REGEX, localization,);

        return { controller, state };
    }

}

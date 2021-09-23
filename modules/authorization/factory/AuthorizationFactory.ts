import { IAuthorizationPresenter } from "../presenter/IAuthorizationPresenter";
import { AuthorizationController } from "../presenter/AuthorizationController";
import { AuthorizationState } from "../presenter/AuthorizationState";
import { AuthorizeUseCase } from "../useCases/authorizeUseCase/AuthorizeUseCase";
import { MobXRepository } from "../../common/repository/MobXRepository";
import { Config } from "../../../src/config";
import { AxiosRequester } from "../../../libs/requester";
import { AuthorizeRequester } from "../api/AuthorizeRequester";
import { Logger } from "../../../libs/logger";
import { BaseFactory } from "../../../src/baseFactory/BaseFactory";
import { UserPersistence } from "../../common/api/userPersistence/UserPersistence";
import { AsyncStoreStorage } from "../../../libs/storage";
import { NotificationService } from "../../../libs/notificationService/NotificationServise";

export class AuthorizationFactory {
    private static presenter: IAuthorizationPresenter;

    static get() {
        if (!AuthorizationFactory.presenter) {
            AuthorizationFactory.presenter = new AuthorizationFactory().createPresenter();
        }
        return AuthorizationFactory.presenter;
    }

    private createPresenter = () => {
        const { userStore, localization } = BaseFactory.get();
        const emailStore = new MobXRepository<{ value: string; errorMessage: string }>();
        const passwordStore = new MobXRepository<{ value: string; errorMessage: string }>();
        const errorStore = new MobXRepository<{ isError: boolean; message: string }>();
        const isLoadingStore = new MobXRepository<boolean>();
        const isDisabledStore = new MobXRepository<boolean>();

        const requester = new AxiosRequester();
        const config = new Config();
        const logger = new Logger();
        const storage = new AsyncStoreStorage();
        const notificationService = new NotificationService(config);
        const userPersistence = new UserPersistence(storage, userStore, config);
        const authorizeRequester = new AuthorizeRequester(requester, config, emailStore, passwordStore, errorStore, logger);

        const authorizeUseCase = new AuthorizeUseCase(authorizeRequester, userPersistence, notificationService, localization);

        const state = new AuthorizationState(errorStore, isLoadingStore, isDisabledStore, emailStore, passwordStore);
        const controller = new AuthorizationController(state, authorizeUseCase, config.REGEX, localization);

        return { controller, state };
    }

}

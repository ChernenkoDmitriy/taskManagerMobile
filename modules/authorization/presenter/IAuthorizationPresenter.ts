import { IAuthorizationController } from "./AuthorizationController";

export interface IAuthorizationPresenter {
    controller: IAuthorizationController;
    state: {
        readonly error: { isError: boolean; message: string };
        readonly isLoading: boolean;
        readonly isAuthorizationDisabled: boolean;
        readonly email: { value: string; errorMessage: string };
        readonly password: { value: string; errorMessage: string };
    };
}

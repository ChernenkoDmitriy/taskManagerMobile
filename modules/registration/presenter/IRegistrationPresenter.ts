import { IRegistrationController } from "./RegistrationController";

export interface IRegistrationPresenter {
    controller: IRegistrationController;
    state: {
        readonly error: { isError: boolean; message: string };
        readonly isLoading: boolean;
        readonly isDisabled: boolean;
        readonly name: { value: string; errorMessage: string };
        readonly email: { value: string; errorMessage: string };
        readonly password: { value: string; errorMessage: string };
    };
}

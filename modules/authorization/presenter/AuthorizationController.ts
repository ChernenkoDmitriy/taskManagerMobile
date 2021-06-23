import { IAuthorizationState } from "./AuthorizationState";
import { IAuthorizeUseCase } from "../useCases/AuthorizeUseCase";
import { IRegex } from "../../../src/config/IConfig/IRegex";

export interface IAuthorizationController {
    onChangeEmail: (data: string) => void;
    onChangePassword: (data: string) => void;
    onAuthorize: () => Promise<void>;
    onValidateEmail: () => void;
    onValidatePassword: () => void;
    onUnmounted: () => void;
}

export class AuthorizationController implements IAuthorizationController {
    constructor(
        private state: IAuthorizationState,
        private authorizeUseCase: IAuthorizeUseCase,
        private regex: IRegex,
    ) { }

    onValidateEmail = () => {
        let isValid = true;
        if (this.state.email.value) {
            isValid = this.regex.emailRegExp.test(this.state.email.value);
        }
        this.state.setEmail({ value: this.state.email.value, errorMessage: isValid ? '' : 'notValidEmail' });
    }

    onValidatePassword = () => {
        let isValid = true;
        if (this.state.password.value) {
            isValid = this.regex.passwordRegExp.test(this.state.password.value);
        }
        this.state.setPassword({ value: this.state.password.value, errorMessage: isValid ? '' : 'notValidPassword' });
    }

    onChangeEmail = (data: string) => {
        this.state.setEmail({ value: data, errorMessage: '' });
        this.validateInputs();
    }

    onChangePassword = (data: string) => {
        this.state.setPassword({ value: data, errorMessage: '' });
        this.validateInputs();
    }

    onAuthorize = async () => {
        this.state.setIsLoading(true);
        // await this.authorizeUseCase.authorize(this.authorizationState.email, this.authorizationState.password);
        // this.processingAuthorize();
        this.state.setIsLoading(false);
    }

    private validateInputs = () => {
        const isDisabled = !( this.regex.emailRegExp.test(this.state.email.value) && this.regex.passwordRegExp.test(this.state.password.value));
        this.state.setIsAuthorizationDisable(isDisabled);
    }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}

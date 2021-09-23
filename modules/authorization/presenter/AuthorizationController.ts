import { Alert, Keyboard } from "react-native";
import { IAuthorizationState } from "./AuthorizationState";
import { IAuthorizeUseCase } from "../useCases/authorizeUseCase/AuthorizeUseCase";
import { IRegex } from "../../../src/config/IConfig/IRegex";
import { ILocalization } from "../../../src/localization/ILocalization";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";

export interface IAuthorizationController {
    onChangeEmail: (data: string) => void;
    onChangePassword: (data: string) => void;
    onAuthorize: (navigation: IStackNavigation) => Promise<void>;
    onValidateEmail: () => void;
    onValidatePassword: () => void;
    onUnmounted: () => void;
}

export class AuthorizationController implements IAuthorizationController {
    constructor(
        private state: IAuthorizationState,
        private authorizeUseCase: IAuthorizeUseCase,
        private regex: IRegex,
        private localization: ILocalization,
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

    onAuthorize = async (navigation: IStackNavigation) => {
        this.state.setIsLoading(true);
        Keyboard.dismiss();
        await this.authorizeUseCase.authorize(this.state.email.value, this.state.password.value);
        if (this.state.error.isError) {
            Alert.alert(this.localization.t('error'), this.localization.t(this.state.error.message));
        } else {
            navigation.navigate('HomeTab');
        }
        this.state.setIsLoading(false);
    }

    private validateInputs = () => {
        const isDisabled = !(this.regex.emailRegExp.test(this.state.email.value) && this.regex.passwordRegExp.test(this.state.password.value));
        this.state.setIsAuthorizationDisable(isDisabled);
    }

    onUnmounted = () => {
        this.state.setDefaultState();
    }

}

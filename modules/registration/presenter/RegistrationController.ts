import { IRegistrationState } from "./RegistrationState";
import { IRegisterUseCase } from "../useCases/RegisterUseCase";
import { ILocalization } from "../../../src/localization/ILocalization";
import { Alert, Keyboard } from "react-native";
import { IStackNavigation } from "../../../src/navigation/INavigation/IStackNavigation";
import { IRegex } from "../../../src/config/IConfig/IRegex";

export interface IRegistrationController {
    onValidateEmail: () => void;
    onValidatePassword: () => void;
    onValidateName: () => void;
    onChangeEmail: (data: string) => void;
    onChangePassword: (data: string) => void;
    onChangeName: (data: string) => void;
    onRegister: (navigation: IStackNavigation) => Promise<void>;
}

export class RegistrationController implements IRegistrationController {
    constructor(
        private state: IRegistrationState,
        private registerUseCase: IRegisterUseCase,
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

    onValidateName= () => {
        let isValid = true;
        if (this.state.name.value) {
            isValid = this.regex.nameRegExp.test(this.state.name.value);
        }
        this.state.setName({ value: this.state.name.value, errorMessage: isValid ? '' : 'notValidPName' });
    }

    onChangeEmail = (data: string) => {
        this.state.setEmail({ value: data, errorMessage: '' });
        this.validateInputs();
    }

    onChangePassword = (data: string) => {
        this.state.setPassword({ value: data, errorMessage: '' });
        this.validateInputs();
    }

    onChangeName = (data: string) => {
        this.state.setName({ value: data, errorMessage: '' });
        this.validateInputs();
    }

    onRegister = async (navigation: IStackNavigation) => {
        this.state.setIsLoading(true);
        Keyboard.dismiss();
        await this.registerUseCase.register(this.state.email.value, this.state.password.value, this.state.name.value);
        if (this.state.error.isError) {
            Alert.alert(this.localization.t('error'), this.localization.t(this.state.error.message));
        } 
        this.state.setIsLoading(false);
    }

    private clearErrorState = () => {
        this.state.setError({ isError: false, message: '' });
    }

    private validateInputs = () => {
        const isDisabled = !(
            this.state.email &&
            this.state.password &&
            this.state.name);
        this.state.setIsDisable(isDisabled);
    }

}

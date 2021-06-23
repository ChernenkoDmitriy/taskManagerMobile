import { IRegistrationState } from "./RegistrationState";
import { IRegisterUseCase } from "../useCases/RegisterUseCase";

export interface IRegistrationController {
    onChangeEmail: (data: string) => void;
    onChangePassword: (data: string) => void;
    onChangeName: (data: string) => void;
    onRegister: () => Promise<void>;
}

export class RegistrationController implements IRegistrationController {
    constructor(
        private state: IRegistrationState,
        private registerUseCase: IRegisterUseCase,
    ) { }

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

    onRegister = async () => {
        this.state.setIsLoading(true);
        // await this.registerUserUseCase.register(this.registrationState.name, this.registrationState.password, this.registrationState.phone, this.registrationState.email);
        // this.processingRegister();
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

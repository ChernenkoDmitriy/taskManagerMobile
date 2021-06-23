import { IRepository } from "../../common/repository/IRepository";

export interface IRegistrationState {
    readonly error: { isError: boolean; message: string };
    readonly isLoading: boolean;
    readonly isDisabled: boolean;
    readonly name: { value: string; errorMessage: string };
    readonly email: { value: string; errorMessage: string };
    readonly password: { value: string; errorMessage: string };
    setError: (data: { isError: boolean; message: string }) => void;
    setIsDisable: (data: boolean) => void;
    setIsLoading: (data: boolean) => void;
    setEmail: (data: { value: string; errorMessage: string }) => void;
    setPassword: (data: { value: string; errorMessage: string }) => void;
    setName: (data: { value: string; errorMessage: string }) => void;
}

export class RegistrationState implements IRegistrationState {
    constructor(
        private errorStore: IRepository<{ isError: boolean; message: string }>,
        private isLoadingStore: IRepository<boolean>,
        private isDisabledStore: IRepository<boolean>,
        private emailStore: IRepository<{ value: string; errorMessage: string }>,
        private nameStore: IRepository<{ value: string; errorMessage: string }>,
        private passwordStore: IRepository<{ value: string; errorMessage: string }>,
    ) { }

    get name() {
        return this.nameStore.data ?? { value: '', errorMessage: '' };
    }

    setName = (data: { value: string; errorMessage: string }) => {
        this.nameStore.save(data);
    }

    get error() {
        return this.errorStore.data ?? { isError: false, message: '' };
    }

    get isLoading() {
        return this.isLoadingStore.data ?? false;
    }

    get isDisabled() {
        return this.isDisabledStore.data ?? true;
    }

    get email() {
        return this.emailStore.data ?? { value: '', errorMessage: '' };
    }

    get password() {
        return this.passwordStore.data ?? { value: '', errorMessage: '' };
    }

    setError = (data: { isError: boolean; message: string }) => {
        this.errorStore.save(data);
    }

    setIsLoading = (data: boolean) => {
        this.isLoadingStore.save(data);
    }

    setIsDisable = (data: boolean) => {
        this.isDisabledStore.save(data);
    }

    setEmail = (data: { value: string; errorMessage: string }) => {
        this.emailStore.save(data);
    }

    setPassword = (data: { value: string; errorMessage: string }) => {
        this.passwordStore.save(data);
    }

}

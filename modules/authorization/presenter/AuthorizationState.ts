import { IRepository } from "../../common/repository/IRepository";

export interface IAuthorizationState {
    readonly error: { isError: boolean; message: string };
    readonly isLoading: boolean;
    readonly isAuthorizationDisabled: boolean;
    readonly email: { value: string; errorMessage: string };
    readonly password: { value: string; errorMessage: string };
    setError: (data: { isError: boolean; message: string }) => void;
    setIsAuthorizationDisable: (data: boolean) => void;
    setIsLoading: (data: boolean) => void;
    setEmail: (data: { value: string; errorMessage: string }) => void;
    setPassword: (data: { value: string; errorMessage: string }) => void;
    setDefaultState: () => void;
}

export class AuthorizationState implements IAuthorizationState {
    constructor(
        private errorStore: IRepository<{ isError: boolean; message: string }>,
        private isLoadingStore: IRepository<boolean>,
        private isDisabledStore: IRepository<boolean>,
        private emailStore: IRepository<{ value: string; errorMessage: string }>,
        private passwordStore: IRepository<{ value: string; errorMessage: string }>
    ) { }

    get error() {
        return this.errorStore.data ?? { isError: false, message: '' };
    }

    get isLoading() {
        return this.isLoadingStore.data ?? false;
    }

    get isAuthorizationDisabled() {
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

    setIsAuthorizationDisable = (data: boolean) => {
        this.isDisabledStore.save(data);
    }

    setEmail = (data: { value: string; errorMessage: string }) => {
        this.emailStore.save(data);
    }

    setPassword = (data: { value: string; errorMessage: string }) => {
        this.passwordStore.save(data);
    }

    setDefaultState = () => {
        this.errorStore.save(null);
        this.isLoadingStore.save(null);
        this.isDisabledStore.save(null);
        this.emailStore.save(null);
        this.passwordStore.save(null);
    }

}

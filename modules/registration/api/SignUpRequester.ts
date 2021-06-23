import { ILogRequestError } from "../../../libs/logger/";
import { IRestPost } from "../../../libs/requester";
import { ILinks } from "../../../src/config";
import { IResponse } from "../../common/models/IResponse";
import { IRepository } from "../../common/repository/IRepository";
import { ISignUp } from "../useCases/_ports/ISignUp";

export class SignUpRequester implements ISignUp {
    private fields = {
        'email': this.emailStore,
        'password': this.passwordStore,
        'name': this.nameStore,
    }

    constructor(
        private requestor: IRestPost,
        private links: ILinks,
        private emailStore: IRepository<{ value: string; errorMessage: string }>,
        private passwordStore: IRepository<{ value: string; errorMessage: string }>,
        private nameStore: IRepository<{ value: string; errorMessage: string }>,
        private errorStore: IRepository<{ isError: boolean; message: string }>,
        private logger: ILogRequestError,
    ) { }

    signUp = async (email: string, password: string, name: string) => {
        try {
            const response = await this.requestor.post(this.links.LINKS.REGISTRATION, { email, password, name });
            const result = this.processingResponse(response, email, password, name);
            return result;
        } catch (error) {
            this.logger.logRequestError(this.links.LINKS.REGISTRATION, { email, password, name }, error);
            return null;
        }
    }

    private processingResponse = (response: IResponse, email: string, password: string, name: string) => {
        let result = null;
        if (response?.status === 'ok') {
            result = response.data;
        } else if (Array.isArray(response?.invalidFields) && response.invalidFields.length) {
            response.invalidFields.forEach(item => {
                // @ts-ignore
                const fieldRepository = this.fields[item.param];
                if (fieldRepository) {
                    fieldRepository.save({ value: fieldRepository.data?.value || '', errorMessage: item.msg })
                }
            });
        } else {
            this.logger.logRequestError(this.links.LINKS.REGISTRATION, { email, password, name }, response?.error);
            this.errorStore.save({ isError: true, message: response?.messageKey || '' });
        }
        return null;
    }

}

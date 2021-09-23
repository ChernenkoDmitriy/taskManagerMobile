import { IResponse } from "../../../modules/common/models/IResponse";

export interface ISendRegisterToken {
    registerToken: (userId: string, token: string, language: string) => Promise<IResponse>;
}

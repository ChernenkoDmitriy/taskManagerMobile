import { IResponse } from "../../../modules/common/models/IResponse";

export interface ISendDeleteToken {
    deleteToken: (token: string) => Promise<IResponse>;
}

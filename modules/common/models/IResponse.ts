export interface IResponse {
    status: 'ok' | 'error' | string;
    error?: any;
    messageKey?: string;
    invalidFields?: { msg: string, param: string, }[],
    data?: any;
}

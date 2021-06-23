import { ILogRequestError } from "./ILogger/LogRequestError";

export class Logger implements ILogRequestError {

    logRequestError = (method: string, params: object, error: any) => {
        console.warn(
            'Method: ', method,
            '\n\rParams: ', params,
            '\n\eError: ', error);
    }

}
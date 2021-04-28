export interface IRestGet {
    get: (url: string, params?: object, headers?: object,  timeoutMS?: number) => Promise<Response>;
}
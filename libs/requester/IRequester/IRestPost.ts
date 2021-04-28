export interface IRestPost {
    post: (url: string, body?: object, headers?: object,  timeoutMS?: number) => Promise<any>;
}
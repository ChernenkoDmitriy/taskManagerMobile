import Axios from "axios";
import { IRequester } from ".";

export class AxiosRequester implements IRequester {
    private static instance: AxiosRequester;
    constructor() {
        if (AxiosRequester.instance) {
            return AxiosRequester.instance;
        }
        AxiosRequester.instance = this;
    }

    post = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'POST',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            data && (config.data = JSON.stringify(data));
            const response = await Axios(config);
            return response;
        } catch (error) {
            console.warn('AxiosRequester -> post: ', error.message);
            return error;
        }
    }

    get = async (url: string, params?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            params && (config.params = params);
            const response = await Axios(config);
            return response;
        } catch (error) {
            console.warn('AxiosRequester -> get: ', error);
            return error;
        }
    }

}

import { describe, test, expect } from '@jest/globals';
import { AxiosRequester } from "../";

jest.mock('axios', () => {
    return (config: any) => {
        if (!config.url) {
            throw 'Network error';
        } else if (config.method === 'GET') {
            return { status: 200, data: { answer: 'answer' }, config };
        } else if (config.method === 'POST') {
            return { status: 200, data: { answer: 'answer' }, config };
        }
        return null;
    }
})

describe('AxiosRequester', () => {
    test('get method', async () => {
        const asyncStoreStorage = new AxiosRequester();
        const result = await asyncStoreStorage.get('https://test', { param: 'param' }, { header: 'header' });
        expect(result).toEqual({"config": {"headers": {"header": "header"}, "method": "GET", "params": {"param": "param"}, "timeout": 60000, "url": "https://test"}, "data": {"answer": "answer"}, "status": 200});
    });
    test('get method', async () => {
        const asyncStoreStorage = new AxiosRequester();
        const result = await asyncStoreStorage.get('');
        expect(result).toEqual('Network error');
    });
    test('post method', async () => {
        const asyncStoreStorage = new AxiosRequester();
        const result = await asyncStoreStorage.post('https://test', { param: 'param' }, { header: 'header' });
        expect(result).toEqual({"config": {"data": "{\"param\":\"param\"}", "headers": {"header": "header"}, "method": "POST", "timeout": 60000, "url": "https://test"}, "data": {"answer": "answer"}, "status": 200});
    });
    test('post method', async () => {
        const asyncStoreStorage = new AxiosRequester();
        const result = await asyncStoreStorage.post('');
        expect(result).toEqual('Network error');
    });
})

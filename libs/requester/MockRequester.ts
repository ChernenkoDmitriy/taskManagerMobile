import { IRequester } from ".";
import { CreateRoomFactory } from "../../nodejs/modules/createRoom/factory/CreateRoomFactory";
import { FindUserFactory } from "../../nodejs/modules/findUsers/factory/FindUserFactory";
import { GetRoomsFactory } from "../../nodejs/modules/getRooms/factory/GetRoomsFactory";
import { UserAuthorizeFactory } from "../../nodejs/modules/userAuthorize/factory/UserAuthorizeFactory";
import { UserRegisterFactory } from "../../nodejs/modules/userRegister/factory/UserRegisterFactory";
import { AppConfig, IAppConfig } from "../../src/config";

export class MockRequester implements IRequester {
    private static instance: MockRequester;
    private config!: IAppConfig;
    constructor() {
        if (MockRequester.instance) {
            return MockRequester.instance;
        }
        this.config = new AppConfig;
        MockRequester.instance = this;
    }

    post = async (url: string, data?: any, _headers?: object, _timeoutMS?: number): Promise<any> => {
        try {
            let response: any = { data: null, ok: false };
            switch (url) {
                case this.config?.LINKS.REGISTRATION:
                    const userRegisterFactory = new UserRegisterFactory();
                    response.data = await userRegisterFactory.userRegisterUseCase.register(data.name, data.phone, data.email, data.hashPassword);
                    response.ok = !!response.data;
                    break;
                case this.config?.LINKS.AUTHORIZATION:
                    const userAuthorizeFactory = new UserAuthorizeFactory();
                    response.data = await userAuthorizeFactory.userAuthorizeUseCase.authorize(data.name, data.hashPassword);
                    response.ok = !!response.data;
                    break;
                case this.config?.LINKS.FIND_USERS:
                    const findUserFactory = new FindUserFactory();
                    response.data = await findUserFactory.findUsersUseCase.findUsers(data.value, data.token);
                    response.ok = !!response.data;
                    break;
                case this.config?.LINKS.CREATE_ROOM:
                    const createRoomFactory = new CreateRoomFactory();
                    response.data = await createRoomFactory.createRoomUseCase.createRoom(data.name, data.admin, data.members, data.logo);
                    response.ok = !!response.data;
                    break;
                case this.config?.LINKS.GET_ROOM_LIST:
                    const getRoomsFactory = new GetRoomsFactory();
                    response.data = await getRoomsFactory.getRoomsUseCase.getRoomsByUserUid(data.userUid);
                    response.ok = !!response.data;
                    break;

            }
            return response;
        } catch (error) {
            console.warn('AxiosRequester -> post: ', error.message);
            return error;
        }
    }

    get = async (url: string, _params?: object, _headers?: object, _timeoutMS?: number): Promise<any> => {
        try {
            let response;
            switch (url) {

            }
            return response;
        } catch (error) {
            console.warn('AxiosRequester -> get: ', error);
            return error;
        }
    }

}

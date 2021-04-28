import NetInfo, { NetInfoState, NetInfoSubscription } from "@react-native-community/netinfo";
import { IInternetConnection } from "./IInternetConnection";

export type INetInfoState = NetInfoState;

export class NetinfoController implements IInternetConnection {
    private static instance: NetinfoController;
    private unsubscribes: NetInfoSubscription[] = [];

    constructor() {
        if (NetinfoController.instance) {
            return NetinfoController.instance;
        }
        NetinfoController.instance = this;
    }

    subscribe = (callBack: (netInfoState: INetInfoState) => void): NetInfoSubscription => {
        const unsubscribe = NetInfo.addEventListener((netInfoState: INetInfoState) => {
            callBack(netInfoState);
        });
        this.unsubscribes.push(unsubscribe);
        return () => {
            this.unsubscribes = this.unsubscribes.filter(item => item !== unsubscribe);
            unsubscribe();
        };
    }

    unsubscribeAll = () => {
        this.unsubscribes.forEach(item => item());
        this.unsubscribes = [];
    }

}

import { NetInfoState } from "@react-native-community/netinfo";

export interface IInternetConnection {
    subscribe: (callBack: (netInfoState: NetInfoState) => void) => void;
    unsubscribeAll: () => void;
}
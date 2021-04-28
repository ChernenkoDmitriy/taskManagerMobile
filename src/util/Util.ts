import { Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { initialWindowMetrics, Metrics } from 'react-native-safe-area-context';

export interface IUtil {
    getVersion: () => string;
    getBuild: () => string;
    getInitialWindowMetrics: () => Metrics;
}

export class Util implements IUtil {
    private static instance: Util;

    private initialWindow!: Metrics;
    private static _isIOS: boolean = Platform.OS === 'ios';
    private static _size: { width: number, height: number } = Dimensions.get('window');


    constructor() {
        if (Util.instance) {
            return Util.instance;
        }
        Util.instance = this;
    }

    static get isIOS() {
        return Util._isIOS;
    }

    static get size() {
        return { ...Util._size };
    }

    getVersion = () => {
        const version = DeviceInfo.getVersion();
        return version;
    };

    getBuild = () => {
        const build = DeviceInfo.getBuildNumber();
        return build;
    };

    getInitialWindowMetrics = () => {
        if (this.initialWindow) {
            return this.initialWindow;
        } else if (initialWindowMetrics) {
            this.initialWindow = initialWindowMetrics;
            return this.initialWindow;
        } else {
            const { width, height } = Dimensions.get('window');
            return { frame: { height, width, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } };
        }
    };

}

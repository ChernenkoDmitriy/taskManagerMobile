import { Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { initialWindowMetrics, Metrics } from 'react-native-safe-area-context';

export class Util {
    private static instance: Util;

    private static initialWindow: Metrics;
    private static _isIOS: boolean = Platform.OS === 'ios';
    private static _size: { width: number, height: number } = Dimensions.get('window');

    constructor() {
        if (Util.instance) {
            return Util.instance;
        }
        Util.instance = this;
    }

    static get text() {
        return {
            small: {
                fontSize: 12,
                lineHeight: 14,
            },
            medium: {
                fontSize: 18,
                lineHeight: 22,
                fontFamily: 'Roboto-Light'
            },
            large: {
                fontSize: 22,
                lineHeight: 26,
                fontFamily: 'Roboto-Light'
            },

        }
    }

    static get isIOS() {
        return Util._isIOS;
    }

    static get size() {
        return { ...Util._size };
    }

    static get getFrameHeight() {
        const initialWindow = Util.getInitialWindowMetrics()
        return initialWindow.frame.height - initialWindow.insets.bottom - initialWindow.insets.top;
    }

    static getVersion = () => {
        const version = DeviceInfo.getVersion();
        return version;
    }

    static getBuild = () => {
        const build = DeviceInfo.getBuildNumber();
        return build;
    }

    static getInitialWindowMetrics = () => {
        if (Util.initialWindow) {
            return Util.initialWindow;
        } else if (initialWindowMetrics) {
            Util.initialWindow = initialWindowMetrics;
            return Util.initialWindow;
        } else {
            const { width, height } = Dimensions.get('window');
            return { frame: { height, width, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } };
        }
    }

}

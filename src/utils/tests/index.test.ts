import { Dimensions } from 'react-native';
import { Utils } from '../Utils';
import safeArea from 'react-native-safe-area-context';

jest.mock('react-native-device-info', () => ({
    getVersion: () => '1.1.0',
    getBuildNumber: () => '10'
}));

jest.mock('react-native-safe-area-context', () => ({
    initialWindowMetrics: { frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } },
}));

describe('Util', () => {
    test('get app version', () => {
        const version = Utils.getVersion();
        expect(version).toEqual('1.1.0');
    });
    test('get app build', () => {
        const version = Utils.getBuild();
        expect(version).toEqual('10');
    });
    test('get app window metrics', () => {
        safeArea.initialWindowMetrics = { frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } };
        const metrics = Utils.getInitialWindowMetrics();
        expect(metrics).toEqual({ frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } });
        const secondRequest = Utils.getInitialWindowMetrics();
        expect(secondRequest).toEqual({ frame: { height: 10, width: 10, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } });
    });
    test('get app window metrics when initialWindowMetrics null', () => {
        Utils.initialWindow = null as any;
        safeArea.initialWindowMetrics = null;
        const metrics = Utils.getInitialWindowMetrics();
        const { width, height } = Dimensions.get('window');
        expect(metrics).toEqual({ frame: { height, width, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } });
    });
})

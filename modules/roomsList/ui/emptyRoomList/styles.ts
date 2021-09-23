import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

const HEADER_HEIGHT = 60;

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: Utils.getFrameHeight - HEADER_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.accentColorLight
        },
        title: {
            color: colors.buttonText,
        },
    });
    return styles;
};
import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            minWidth: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textButton: {
            ...Utils.text.medium,
            fontFamily: 'Roboto-Bold',
            color: colors.accentColorLight,
        },
    });
};

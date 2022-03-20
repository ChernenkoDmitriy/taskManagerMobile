import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            borderBottomColor: colors.shadow,
            borderBottomWidth: 1
        },
        text: {
            fontSize: 20,
            marginRight: 30,
            marginLeft: 8,
        },
    });
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 60,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 30,
        },
        title: {
            lineHeight: 26,
            fontSize: 22,
            color: colors.regularText,
        },
        buttonLeft: {
            flex: 1,
            height: 50,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        buttonRight: {
            flex: 1,
            height: 50,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
        },
        buttonTextRight: {
            marginRight: 10,
            lineHeight: 24,
            fontSize: 20,
            color: colors.regularText,
        },
        buttonTextLeft: {
            marginLeft: 10,
            lineHeight: 24,
            fontSize: 20,
            color: colors.regularText,
        },
    });
    return styles;
}

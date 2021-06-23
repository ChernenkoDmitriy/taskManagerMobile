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
        button: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        buttonText: {
            lineHeight: 24,
            fontSize: 20,
            marginLeft: 20,
            color: colors.regularText,
        },
    });
    return styles;
};
import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 36,
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
        buttonContainer: {
            height: 36,
            justifyContent: 'center',
        },
        text: {
            fontSize: 18,
            lineHeight: 22,
            color: colors.regularText,
            textAlign: 'center',
        },
    });
    return styles;
};
import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.accentColorDark,
            borderRadius: 2,
            elevation: 4,
            minHeight: 40,
            justifyContent: 'center',
        },
        text: {
            fontSize: 18,
            lineHeight: 22,
            color: colors.buttonText,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        absoluteSheet: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}

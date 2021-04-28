import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textLogo: {
            fontSize: 20,
            lineHeight: 24,
            color: colors.tittleText,
        }
    });
    return styles;
}

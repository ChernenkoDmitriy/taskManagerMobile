import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            borderTopWidth: 1,
            borderTopColor: colors.shadow,
            height: 55,
            width: '100%',
            flexDirection: 'row'
        },
        buttonContainer: {
            height: 55,
            width: 55,
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkBoxContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 26,
            width: 26,
            borderColor: colors.tittleText,
            borderWidth: 2,
            borderRadius: 8,
        },
    });
    return styles;
}

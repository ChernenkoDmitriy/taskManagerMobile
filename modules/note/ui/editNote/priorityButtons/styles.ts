import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex: 100,
            height: 55,
            width: 55,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonContainer: {
            height: 55,
            width: 55,
            justifyContent: 'center',
            alignItems: 'center',
        },
        absoluteButtonsContainer: {
            zIndex: 100,
            position: 'absolute',
            bottom: 1,
            left: 0,
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.shadow,
        }
    });
    return styles;
}

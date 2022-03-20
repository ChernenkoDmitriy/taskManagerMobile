import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.card,
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
        },
        image: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {

        },
    });
    return styles;
}

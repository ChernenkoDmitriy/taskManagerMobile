import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        buttonContainer: {
            width: 40,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: colors.buttonText,
            fontSize: 18,
        },
        rightComponentContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
        }
    });
    return styles;
};
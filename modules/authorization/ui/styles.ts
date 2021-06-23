import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: colors.background,
        },
        inputsContainer: {
            height: 100,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        buttonContainer: {
            flex: 1,
            justifyContent: 'flex-end'
        },
        buttonWrapper: {
            height: 120,
            justifyContent: 'center',
        },
    });
    return styles;
}

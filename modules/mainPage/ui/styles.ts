import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center'
        },
        buttonWrapper: {
            marginTop: 200,
            height: 150,
            width: 200,
            justifyContent: 'space-between'
        }
    });
    return styles;
}

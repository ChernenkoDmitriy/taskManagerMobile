import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            width: '100%',
            minHeight: 50,
            alignItems: 'center',
            borderBottomColor: colors.shadow,
            borderBottomWidth: 1,
        },
        logoContainer: {
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: colors.shadow,
            marginHorizontal: 15,
        }
    });
    return styles;
};
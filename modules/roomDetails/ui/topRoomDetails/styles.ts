import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.accentColorLight,
            height: 200,
        },
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatarContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 2
        },
        buttonBack: {
            height: 50,
            width: 50,
            marginLeft: 10,
            backgroundColor: colors.background,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 50,
            flexDirection: 'row',
            paddingHorizontal: 15,
        },
        leftIcon: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleContainer: {
            height: 50,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 10
        },
        title: {
            fontWeight: '500',
            fontSize: 16,
            color: colors.regularText,
        },
        rightIcon: {
            height: 50,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });
    return styles;
};
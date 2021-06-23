import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';
import { Util } from '../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        itemContainer: {
            width: '100%',
            height: 50,
            flexDirection: 'row',
        },
        languageText: {
            ...Util.text.medium,
        },
        iconWrapper: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 18,
        },
        circleWrapper: {
            width: 60,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        circleSelected: {
            marginHorizontal: 3,
            width: 24,
            height: 24,
            borderColor: colors.accentColorDark,
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        circleFilled: {
            width: 16,
            height: 16,
            backgroundColor: colors.accentColorDark,
            borderColor: colors.accentColorDark,
            borderWidth: 1,
            borderRadius: 50,
        },
        circle: {
            marginVertical: 3,
            marginHorizontal: 6,
            width: 18,
            height: 18,
            borderColor: colors.shadow,
            borderWidth: 1,
            borderRadius: 50,
        },
    });
    return styles;
}

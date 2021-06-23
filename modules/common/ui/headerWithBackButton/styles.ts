import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colors.shadow,
        },
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleContainer: {
            flex: 1,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            ...Util.text.large,
        },
    });
    return styles;
}

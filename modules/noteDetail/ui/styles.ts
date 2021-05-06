import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';
import { Util } from '../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        textTitle: {
            marginBottom: 10,
            ...Util.text.large,
            fontFamily: 'Roboto-bold',
            fontWeight: '700',
            marginHorizontal: 20,
        },
        textContent: {
            ...Util.text.medium,
            marginHorizontal: 20,
        }
    });
    return styles;
}

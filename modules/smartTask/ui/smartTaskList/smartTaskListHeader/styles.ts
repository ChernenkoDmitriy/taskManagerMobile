import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { Util } from '../../../../../src/util/Util';

export const getStyle = (colors: IColors) => StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.shadow,
    },
    textTitle: {
        ...Util.text.large,
        fontFamily: 'Roboto-Bold',
    },
})

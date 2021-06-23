import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { Util } from '../../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
            paddingHorizontal: 20,
            width: '100%',
            height: 55,
        },
        inputNoteTitle: {
            padding: 0,
            color: colors.titleText,
            height: 40,
            width: '100%',
            borderBottomWidth: 1,
            ...Util.text.medium,
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
        },
    });
    return styles;
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            minHeight: 40,
            marginTop: 2,
        },
        checkboxContainer: {
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textWrapper: {
            paddingTop: 15,
            flex: 1,
        },
        textNotePoint: {
            width: '100%',
            ...Util.text.medium,
            color: colors.regularText,
        },
    });
    return styles;
}

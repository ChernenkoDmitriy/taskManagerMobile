import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { Util } from '../../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        inputContainer: {
            paddingHorizontal: 20,
            backgroundColor:colors.background
        },
        inputNoteContent: {
            width: '100%',
            padding: 0,
            color: colors.regularText,
            marginVertical: 5,
            ...Util.text.medium,
        },

        pointContainer: {
            flexDirection: 'row',
            minHeight: 40,
            flex: 1,
            marginTop: 2,
        },
        checkboxContainer: {
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputWrapper: {
            flex: 1,
        },
        inputNotePoint: {
            width: '100%',
            padding: 0,
            color: colors.regularText,
            minHeight: 50,
        },
        buttonDelete: {
            height: 40,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return styles;
}

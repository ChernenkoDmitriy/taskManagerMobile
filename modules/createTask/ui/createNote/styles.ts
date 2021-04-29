import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        titleInputWrapper: {
            paddingHorizontal: 20,
            width: '100%',
            height: 30,
        },
        inputNoteTitle: {
            height: 30,
            width: '100%',
            borderBottomWidth: 1,
            ...Util.text.medium,
        },
        contentInputWrapper: {
            flex: 1,
            paddingHorizontal: 20,
        },
        inputNoteContent: {
            marginVertical: 30,
            ...Util.text.medium,
        }
    });
    return styles;
}

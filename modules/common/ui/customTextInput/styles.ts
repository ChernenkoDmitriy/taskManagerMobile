import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            minHeight: 50,
            marginVertical: 3,
        },
        inputContainer: {
            width: '100%',
            height: 40,
            borderWidth: 1,
            borderRadius: 4,
            flexDirection: 'row',
        },
        textInput: {
            flex: 1,
            padding: 0,
            marginHorizontal: 10,
            color: colors.regularText,
        },
        iconWrapper: {
            height: 40,
            width: 60,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        },
        errorText: {
            ...Utils.text.small,
            color: colors.error,
            marginTop: 2,
            marginBottom: 10,
        },
    });
    return styles;
};
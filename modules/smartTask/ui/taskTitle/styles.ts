import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
            paddingHorizontal: 20,
            width: '100%',
        },
        inputTitle: {
            padding: 0,
            color: colors.titleText,
            width: '100%',
            // borderBottomWidth: 1,
            ...Utils.text.medium,
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
        },
    });
    return styles;
}

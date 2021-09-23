import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            backgroundColor: colors.background
        },
        inputContent: {
            width: '100%',
            padding: 0,
            color: colors.regularText,
            marginVertical: 5,
            ...Utils.text.medium,
        },
    });
    return styles;
}

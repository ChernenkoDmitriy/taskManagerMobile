import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colors.shadow,
        },
        titleContainer: {
            flex: 1,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            ...Utils.text.large,
        },
    });
    return styles;
}

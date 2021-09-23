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
            paddingRight: 20,
        },
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentWrapper: {
            flex: 1,
            flexDirection: 'row',
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

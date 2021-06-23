import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

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
        logoWrapper: {
            marginHorizontal: 10,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center'
        },
        imageLogo: {
            width: 40,
            height: 40,
        },
        textTitle: {
            ...Util.text.large,
        },
        buttonsWrapper: {
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
        },
        buttonSettings: {
            height: 70,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderBottomColor: colors.shadow,
            paddingVertical: 10,
            borderBottomWidth: 1,
            alignItems: 'center',
        },
        logoContainer: {
            height: 50,
            width: 50,
            borderRadius: 50,
            marginVertical: 10,
        },
        infoContainer: {
            flex: 1,
            marginLeft: 20,
        },
        text: {
            color: colors.regularText,
            fontSize: 16,
            lineHeight: 20,
            marginTop: 3,
        },
        buttonLogout: {
            minWidth: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textButtonSignIn: {
            ...Util.text.medium,
            fontFamily: 'Roboto-Bold',
            color: colors.accentColorLight,
            marginRight: 15,
        },
    });
};

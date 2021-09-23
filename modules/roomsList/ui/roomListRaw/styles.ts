import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: colors.background,
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 1,
                height: 2,
            },
            shadowOpacity: 0.7,
            elevation: 2,
        },
        topContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        titleWrapper: {
            flex: 1,
            justifyContent: 'center',
        },
        title: {
            ...Utils.text.medium,
            fontWeight: '500',
        },
        logoContainer: {
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: colors.shadow,
            marginRight: 15,
        },
        bottomContainer: {
            paddingTop: 10,
            marginVertical: 10,
        },
        activeTasksWrapper: {
            flexDirection: 'row',
        },
    });
    return styles;
};
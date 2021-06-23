import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../../src/colorTheme';
import { Util } from '../../../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
        },
        scroll: {
            width: '100%',
        },
        contentContainerStyle: {
            width: '100%',
            paddingHorizontal: 5,
        },
        contentNote: {
            flex: 1,
            flexDirection: 'row',
        },
        indicationPriority: {
            height: '100%',
            width: 10,
        },
        noteContainer: {
            backgroundColor: '#EAEDED',
            width: '100%',
            height: 70,
            elevation: 5,
            marginVertical: 5,
        },
        title: {
            ...Util.text.large,
            color: colors.titleText,
            marginHorizontal: 20,
            marginVertical: 5,
        },
        titleContainer: {
            flex: 1,
            justifyContent: 'center'
        },
        timeContainer: {
            marginLeft: 10,
            maxWidth: '50%',
            justifyContent: 'center'
        },
        textWrapper: {
            flex: 1,
            marginHorizontal: 10,
        },
        titleText: {
            ...Util.text.small,
            color: colors.titleText,
            marginVertical: 5,
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
        },
        noteText: {
            ...Util.text.small,
            color: colors.regularText,
        },
        textTime: {
            fontSize: 12,
            color: colors.regularText,
        }
    });
    return styles;
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
        },
        containerButton: {
            marginHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: colors.card,
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 1,
                height: 3,
            },
            shadowOpacity: 0.1,
            elevation: 2,
            flexDirection: 'row',
            overflow: 'hidden',
        },
        descriptionWrapper: {
            flex: 1,
            padding: 20,
        },
        priorityIndicator: {
            height: '100%',
            width: 10,
        },
        title: {
            marginBottom: 4,
            fontSize: 16,
            lineHeight: 20,
            color: colors.titleText,
        },
        contentText: {
            fontSize: 12,
            lineHeight: 14,
            color: colors.regularText,
        },
    });
    return styles;
};

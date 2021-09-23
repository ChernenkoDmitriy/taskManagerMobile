import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            width: '100%',
            minHeight: 50,
            marginVertical: 3,
            borderBottomColor: colors.shadow,
            borderBottomWidth: 1,
        },
        textInput: {
            flex: 1,
            padding: 0,
            marginHorizontal: 10,
            color: colors.regularText,
        },
        searchButton: {
            height: 40,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
};
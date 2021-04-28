import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scroll: {
            flex: 1,
        },
        scrollContainer: {
            // flex: 1,
            // height: '100%',
            // width: '100%'
        }
    });
    return styles;
}

import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
        },
        buttonDone: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
    return styles;
}

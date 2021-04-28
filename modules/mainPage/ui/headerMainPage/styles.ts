import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
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

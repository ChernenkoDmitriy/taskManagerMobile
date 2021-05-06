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
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}

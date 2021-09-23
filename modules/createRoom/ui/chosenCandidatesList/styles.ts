import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 60,
        },
    });
    return styles;
};
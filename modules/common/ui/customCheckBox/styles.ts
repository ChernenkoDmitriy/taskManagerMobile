import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        checkBox: {
            width: 25, 
            height: 25
        },
    });
    return styles;
};
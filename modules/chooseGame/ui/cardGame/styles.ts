import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: Util.size.width,
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }
    });
    return styles;
}

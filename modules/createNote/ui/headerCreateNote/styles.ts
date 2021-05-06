import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { Util } from '../../../../src/util/Util';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
        },
        titleContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            ...Util.text.large,
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

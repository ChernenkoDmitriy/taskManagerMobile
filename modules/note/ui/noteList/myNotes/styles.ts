import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { Util } from '../../../../../src/util/Util';

const WIDTH = Util.size.width / 2.3;

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
        },
        scroll: {
            width: '100%'
        },
        contentContainerStyle: {
            paddingHorizontal: 5,
        },
        noteContainer: {
            height: 130,
            width: WIDTH,
            backgroundColor: '#aeaea1',
            margin: 5,
            borderRadius: 8,
            padding: 10,
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: { height: 0, width: 0 },
            shadowColor: colors.shadow,
            elevation: 3,
        },
        noteText: {
            color: colors.regularText,
            ...Util.text.medium,
        }
    });
    return styles;
}

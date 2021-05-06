import React, { FC, useMemo } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';

interface Props {
    colors: IColors;
    value: boolean;
    onChoose: () => void
}

export const CustomCheckBox: FC<Props> = ({ colors, onChoose, value }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <CheckBox
            hitSlop={{ right: 40, left: 40, top: 40, bottom: 40 }}
            disabled={false}
            value={value}
            onValueChange={onChoose}
            tintColors={{ true: colors.accentColorLight }}
            tintColor={colors.inactiveText}
            boxType={'square'}
            style={styles.checkBox}
        />
    );
}

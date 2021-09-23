import React, { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    onPress: () => void;
    colors: IColors;
    sign?: string;
}

export const CircleAbsoluteButton: FC<Props> = ({ onPress, colors, sign = '+' }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.container]}>
            <Text style={styles.text}>{sign}</Text>
        </Pressable>
    )
}

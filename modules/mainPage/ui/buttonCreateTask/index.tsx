import React, { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    onPress: () => void;
    colors: IColors;
}

export const ButtonCreateTask: FC<Props> = ({ onPress, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.container]}>
            <Text style={styles.text}>+</Text>
        </Pressable>
    )
}

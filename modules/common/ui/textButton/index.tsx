import React, { FC, useMemo } from 'react';
import { Pressable, Text, } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    onPress: () => void;
    title: string;
    testID: string;
    titleStyles?: object;
    containerStyle?: object;
}

export const TextButton: FC<Props> = ({ colors, title, onPress, testID, titleStyles = {}, containerStyle = {} }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            style={({ pressed }) => [styles.container, containerStyle, { opacity: pressed ? 0.7 : 1 }]}
            onPress={onPress}
            testID={`${testID}TextButton`}
            accessibilityLabel={`${testID}TextButton`}
        >
            <Text style={[styles.textButton, titleStyles]}>{title}</Text>
        </Pressable>
    )
}

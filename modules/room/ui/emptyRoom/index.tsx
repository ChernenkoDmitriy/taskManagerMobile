import React, { FC, useMemo } from 'react';
import { Text, Pressable, View } from 'react-native';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';

interface Props {
    colors: IColors;
    onPress: () => void;
    title: string;
}

export const EmptyRoom: FC<Props> = ({ onPress, title, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1, }]} onPress={onPress}  >
                <Text numberOfLines={1} style={styles.title} >{title}</Text>
            </Pressable>
        </View>
    )
}

import React, { FC, useMemo } from 'react';
import { Text, Pressable, View, ActivityIndicator } from 'react-native';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';

interface Props {
    colors: IColors;
    onPress: () => void;
    title: string;
    isLoading: boolean;
}

export const EmptyRoomList: FC<Props> = ({ onPress, title, colors, isLoading }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size='large' color={colors.accentColorDark} />
                : <Pressable style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1, }]} onPress={onPress}  >
                    <Text numberOfLines={1} style={styles.title} >{title}</Text>
                </Pressable>}
        </View>
    )
}

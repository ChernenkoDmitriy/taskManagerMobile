import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { ISmartTask } from '../../../common/models/ISmartTask';
import { getStyle } from './styles';

interface Props {
    smartTask: ISmartTask;
    colors: IColors;
    onPress: (smartTask: ISmartTask) => void;
}

export const SmartTaskRow: FC<Props> = ({ colors, smartTask, onPress }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPressItem = useCallback(() => { onPress(smartTask) }, [smartTask]);

    return (
        <Pressable
            style={({ pressed }) => [styles.containerButton, { opacity: pressed ? 0.7 : 1 },]}
            onPress={onPressItem}>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.title} numberOfLines={2}>{smartTask.title}</Text>
                <Text style={styles.contentText} numberOfLines={2}>{smartTask.content}</Text>
            </View>
            <View style={[styles.priorityIndicator, { backgroundColor: colors[smartTask.priority] }]} />
        </Pressable>
    );
};

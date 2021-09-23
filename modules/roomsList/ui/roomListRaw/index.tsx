import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { IRoom } from '../../../common/models/IRoom';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    room: IRoom;
    onChoseRoom: (room: IRoom) => void;
    t: (key: string) => string;
}

export const RoomListRaw: FC<Props> = ({ colors, room, onChoseRoom, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const onPress = useCallback(() => { onChoseRoom(room) }, []);

    return (
        <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1 }]} onPress={onPress}>
            <View style={styles.topContainer}>
                <View style={styles.logoContainer}></View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title} numberOfLines={2}>{room.name}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.activeTasksWrapper}>
                    <Text>{t('members')}: {room.members.length}</Text>
                </View>
            </View>
        </Pressable>
    )
}

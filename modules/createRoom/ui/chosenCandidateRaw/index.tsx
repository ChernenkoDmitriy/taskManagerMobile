import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { IRoomMember } from '../../../common/models/IRoomMember';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    roomMember: IRoomMember;
    onChoseCandidate: (roomMember: IRoomMember) => void;
}

export const ChosenCandidateRaw: FC<Props> = ({ colors, roomMember, onChoseCandidate }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const onPress = useCallback(() => { onChoseCandidate(roomMember) }, []);

    return (
        <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1 }]} onPress={onPress}>
            <View style={styles.logoContainer}></View>
            <Text numberOfLines={1}>{roomMember.name}</Text>
        </Pressable>
    )
}

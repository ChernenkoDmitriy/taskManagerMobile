import React, { FC, useMemo, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { IRoomMember } from '../../../common/models/IRoomMember';
import { MemberCandidateRaw } from '../memberCandidateRaw';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    membersCandidates: IRoomMember[];
    onChoseCandidate: (roomMember: IRoomMember) => void;
}

export const MembersCandidatesList: FC<Props> = ({ colors, membersCandidates, onChoseCandidate }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const keyExtractor = useCallback((item) => item.id, []);
    const renderItem = useCallback(({ item }) => <MemberCandidateRaw key={item.id} colors={colors} roomMember={item} onChoseCandidate={onChoseCandidate} />, []);

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                data={membersCandidates}
            />
        </View>
    )
}

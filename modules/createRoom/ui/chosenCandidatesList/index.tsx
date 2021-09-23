import React, { FC, useMemo, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { IRoomMember } from '../../../common/models/IRoomMember';
import { ChosenCandidateRaw } from '../chosenCandidateRaw';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    chosenCandidates: IRoomMember[];
    onChoseCandidate: (roomMember: IRoomMember) => void;
}

export const ChosenCandidatesList: FC<Props> = ({ colors, chosenCandidates, onChoseCandidate }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const keyExtractor = useCallback((item) => item.id, []);
    const renderItem = useCallback(({ item }) => <ChosenCandidateRaw key={item.id} colors={colors} roomMember={item} onChoseCandidate={onChoseCandidate} />, []);

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                data={chosenCandidates}
            />
        </View>
    )
}

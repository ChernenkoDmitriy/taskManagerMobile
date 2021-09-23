import React, { FC, useMemo, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { ICreateRoomPresenter } from '../presenter/ICreateRoomPresenter';
import { HeaderWithBackButton } from '../../common/ui/headerWithBackButton';
import { SearchUsers } from './searchUsers';
import { RoomNameInput } from './roomNameInput';
import { MembersCandidatesList } from './membersCandidatesList';
import { ChosenCandidatesList } from './chosenCandidatesList';
import { CircleAbsoluteButton } from '../../common/ui/circleAbsoluteButton';
import { useCallback } from 'react';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    createRoomPresenter: ICreateRoomPresenter;
}

export const CreateRoomView: FC<Props> = ({ navigation, colors, t, createRoomPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => controller.onUnmounted, []);
    const onCreateRoom = useCallback(() => { controller.onCreateRoom(navigation) }, []);

    return (
        <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss as any}>
            <HeaderWithBackButton navigation={navigation} colors={colors} title={t('createRoom')} />
            <RoomNameInput colors={colors} onChangeText={controller.onChangeRoomName} value={state.roomName} placeholder={t('enter_room_name')} />
            <SearchUsers colors={colors} onChangeText={controller.onChangeSearchUsersString} value={state.searchUsersString} placeholder={t('addPeople')} onFindUsers={controller.onFindUsers} />
            <ChosenCandidatesList colors={colors} chosenCandidates={state.chosenCandidates} onChoseCandidate={controller.onChoseCandidate} />
            <MembersCandidatesList colors={colors} membersCandidates={state.membersCandidates} onChoseCandidate={controller.onChoseCandidate} />
            <CircleAbsoluteButton colors={colors} onPress={onCreateRoom} />
        </View>
    )
}

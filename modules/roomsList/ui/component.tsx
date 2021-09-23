import React, { FC, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IRoomsListPresenter } from '../presenter/IRoomsListPresenter';
import { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { RoomListRaw } from './roomListRaw';
import { IRoom } from '../../common/models/IRoom';
import { EmptyRoomList } from './emptyRoomList';
import { CircleAbsoluteButton } from '../../common/ui/circleAbsoluteButton';
import { HeaderRoomsList } from './headerRoomsList';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    roomsListPresenter: IRoomsListPresenter;
}

export const RoomsListView: FC<Props> = ({ navigation, colors, t, roomsListPresenter: { state, controller } }) => {
    useEffect(() => { controller.onGetUserRooms() }, [])
    const styles = useMemo(() => getStyle(colors), [colors]);
    const goToCreateRoom = useCallback(() => { navigation.navigate('CreateRoomScreen') }, []);
    const keyExtractor = useCallback((item) => item.id, []);
    const onChoseRoom = useCallback((room: IRoom) => {
        controller.onChoseRoom(room);
        navigation.navigate('RoomScreen')
    }, []);
    const renderItem = useCallback(({ item }) => <RoomListRaw t={t} key={item.id} colors={colors} room={item} onChoseRoom={onChoseRoom} />, []);

    return (
        <View style={styles.container}>
            <HeaderRoomsList colors={colors} navigation={navigation} title={t('roomList')} />
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                data={state.userRooms}
                ListEmptyComponent={<EmptyRoomList onPress={goToCreateRoom} title={t('createRoom')} colors={colors} isLoading={state.isLoading} />}
            />
            {!!state.userRooms.length && <CircleAbsoluteButton colors={colors} onPress={goToCreateRoom} />}
        </View>
    )
}

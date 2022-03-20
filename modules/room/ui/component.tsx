import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IRoomPresenter } from '../presenter/IRoomPresenter';
import { HeaderRoom } from './headerRoom';
// import { EmptyRoom } from './emptyRoom';
import { Dashboard } from './dashboard';
import { useEffect } from 'react';
import { ListSmartTasks } from './listSmartTasks';
import { CircleAbsoluteButton } from '../../common/ui/circleAbsoluteButton';
import { ISmartTask } from '../../common/models/ISmartTask';
import { RoomDetailsScreen } from '../../roomDetails/ui';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    roomPresenter: IRoomPresenter;
}

export const RoomView: FC<Props> = ({ navigation, colors, t, roomPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    useEffect(() => {
        controller.getRoomTasks();
        return controller.onUnmounted
    }, []);

    const goToCreateTask = useCallback(() => { navigation.navigate('SmartTaskScreen') }, []);

    const onChoseTask = useCallback((item: ISmartTask) => {
        controller.onSetChosenSmartTask(item);
        navigation.navigate('SmartTaskScreen')
    }, []);

    return (
        <View style={styles.container}>
            <HeaderRoom onOpenModalRoomDetails={controller.onOpenModalRoomDetails} colors={colors} title={state.chosenRoom.name} navigation={navigation} />
            <ListSmartTasks colors={colors} smartTasks={state.roomTasks} onChoseTask={onChoseTask} />
            {/* <Dashboard colors={colors} goToCreateTask={goToCreateTask} roomTasks={state.roomTasks} />
            ? 
                : <EmptyRoom colors={colors} title={t('createRoom')} onPress={goToCreateRoom} />} */}
            <CircleAbsoluteButton colors={colors} onPress={goToCreateTask} />
            <RoomDetailsScreen navigation={navigation}/>
        </View>
    )
}

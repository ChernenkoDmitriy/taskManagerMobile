import React, { FC, useMemo, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';
import { CircleAbsoluteButton } from '../../../common/ui/circleAbsoluteButton';
import { ISmartTask } from '../../../common/models/ISmartTask';

interface Props {
    colors: IColors;
    roomTasks: ISmartTask[],
    goToCreateTask: () => void;
}

export const Dashboard: FC<Props> = ({ colors, goToCreateTask, roomTasks }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const keyExtractor = useCallback((item) => item.id, []);
    const renderItem = useCallback(({ item }) => <SmartTaskRaw key={item.id} colors={colors} roomTask={item} />, []);

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                data={roomTasks}
            />
            <CircleAbsoluteButton colors={colors} onPress={goToCreateTask} />
        </View>
    )
}

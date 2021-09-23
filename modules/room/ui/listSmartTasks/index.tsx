import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { ISmartTask } from '../../../common/models/ISmartTask';
import { SmartTaskRow } from '../smartTaskRow';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    onChoseTask: (data: ISmartTask) => void;
    smartTasks: ISmartTask[];
}

export const ListSmartTasks: FC<Props> = ({ colors, smartTasks, onChoseTask }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    const keyExtractor = useCallback((item: ISmartTask) => item.id, []);
    const renderItem = useCallback(({ item }) =>
        <SmartTaskRow smartTask={item} onPress={onChoseTask} colors={colors} />
        , [smartTasks]);

    return (
        <FlatList
            style={styles.scroll}
            keyExtractor={keyExtractor}
            data={smartTasks}
            renderItem={renderItem}
        />
    )
}

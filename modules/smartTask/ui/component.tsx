import React, { FC, useEffect, useMemo } from 'react';
import { Keyboard, View, ScrollView } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { ISmartTaskPresenter } from '../presenter/ISmartTaskPresenter';
import { HeaderUpdateSmartTask } from './headerUpdateSmartTask';
import { TaskTitle } from './taskTitle';
import { TaskContent } from './taskContent';
import { TaskContentMenu } from './taskContentMenu';
import { TaskPoints } from './taskPoints';
import { useCallback } from 'react';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    smartTaskPresenter: ISmartTaskPresenter;
}

export const SmartTaskView: FC<Props> = ({ navigation, colors, t, smartTaskPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { return controller.onUnmounted }, [])
    const onSave = useCallback(() => { controller.onSave(navigation) }, []);

    return (
        <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss as any}>
            <HeaderUpdateSmartTask colors={colors} navigation={navigation} onSave={onSave} />
            <ScrollView style={styles.scrollContainer}>
                <TaskTitle t={t} colors={colors} onChangeTitle={controller.onChangeTitle} title={state.chosenSmartTask.title} />
                <TaskContent t={t} noteContent={state.chosenSmartTask.content} onChangeContent={controller.onChangeContent} colors={colors} />
                <TaskPoints t={t} colors={colors} points={state.chosenSmartTask.points} onDeletePoint={controller.onDeletePoint}
                    onChangePoint={controller.onChangePoint} onChangePointProgress={controller.onChangePointProgress} />
            </ScrollView >
            <TaskContentMenu colors={colors} onAddPoint={controller.onAddPoint} />
        </View>
    )
}

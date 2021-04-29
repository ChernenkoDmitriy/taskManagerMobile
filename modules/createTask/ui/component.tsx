import React, { FC, useMemo } from 'react';
import { Keyboard, View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { ICreateTaskPresenter } from '../presenter/ICreateTaskPresenter';
import { HeaderCreateTask } from './headerCreateTask';
import { CreateNote } from './createNote';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    createTaskPresenter: ICreateTaskPresenter;
}

export const CreateTaskView: FC<Props> = ({ navigation, colors, t, createTaskPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss as any}>
            <HeaderCreateTask colors={colors} navigation={navigation} createNote={() => { controller.createNote(navigation) }} />
            <CreateNote t={t} colors={colors} onChangeNoteTitle={controller.onChangeNoteTitle}
                noteTitle={state.noteTitle} noteContent={state.noteContent} onChangeNoteContent={controller.onChangeNoteContent} />
        </View>
    )
}

import React, { FC, useEffect, useMemo } from 'react';
import { Keyboard, View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { ICreateNotePresenter } from '../presenter/ICreateNotePresenter';
import { HeaderCreateNote } from './headerCreateNote';
import { NoteContent } from './noteContent';
import { NoteContentMenu } from './noteContentMenu';
import { NoteTitle } from './noteTitle';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    createNotePresenter: ICreateNotePresenter;
}

export const CreateNoteView: FC<Props> = ({ navigation, colors, t, createNotePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { return controller.clear }, [])

    return (
        <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss as any}>
            <HeaderCreateNote t={t} isDisabledCreate={!state.isCreateEnabled} colors={colors} navigation={navigation} createNote={() => { controller.createNote(navigation); }} />
            <NoteTitle t={t} colors={colors} onChangeNoteTitle={controller.onChangeNoteTitle} noteTitle={state.noteTitle} />
            <NoteContent t={t} colors={colors} noteContent={state.noteContent} onChangeNoteContent={controller.onChangeNoteContent} notePoints={state.notePoints}
                onChangePointProgress={controller.onChangePointProgress} onDeletePoint={controller.onDeletePoint} onChangePoint={controller.onChangePoint} />
            <NoteContentMenu colors={colors} onAddPoint={controller.onAddPoint} />
        </View>
    )
}

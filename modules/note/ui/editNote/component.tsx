import React, { FC, useEffect, useMemo } from 'react';
import { Keyboard, View } from 'react-native';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';
import { HeaderCreateNote } from './headerCreateNote';
import { NoteContent } from './noteContent';
import { NoteContentMenu } from './noteContentMenu';
import { NoteTitle } from './noteTitle';
import { INotePresenter } from '../../presenter/INotePresenter';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    notePresenter: INotePresenter;
}

export const EditNoteView: FC<Props> = ({ navigation, colors, t, notePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { return controller.clear }, [])

    return (
        <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss as any}>
            <HeaderCreateNote isEdit={state.isEdit} t={t} isDisabledCreate={!state.isCreateEnabled} colors={colors} navigation={navigation} createNote={() => { controller.onSave(navigation); }} />
            <NoteTitle t={t} colors={colors} onChangeNoteTitle={controller.onChangeNoteTitle} noteTitle={state.chosenNote.title} />
            <NoteContent t={t} colors={colors} noteContent={state.chosenNote.content} onChangeNoteContent={controller.onChangeNoteContent} notePoints={state.chosenNote.points}
                onChangePointProgress={controller.onChangePointProgressEdit} onDeletePoint={controller.onDeletePoint} onChangePoint={controller.onChangePoint} />
            <NoteContentMenu colors={colors} onAddPoint={controller.onAddPoint} priorities={state.priorities} chosenPriority={state.chosenNote.priority}
                isOpenedPriorityMenu={state.isOpenedPriorityMenu} onChosePriority={controller.onChosePriority} onOpenMenu={controller.onOpenMenuPriority} />
        </View>
    )
}

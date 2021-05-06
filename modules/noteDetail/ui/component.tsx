import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { INoteDetailPresenter } from '../presenter/INoteDetailPresenter';
import { HeaderNoteDetail } from './headerNoteDetail';
import { NotePointText } from './notePointText';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    noteDetailPresenter: INoteDetailPresenter;
}

export const NoteDetailView: FC<Props> = ({ navigation, colors, t, noteDetailPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <HeaderNoteDetail navigation={navigation} colors={colors} onDone={controller.onDone} onDelete={controller.onDelete} />
            {state.chosenNote.title ? <Text style={styles.textTitle}>{state.chosenNote.title}</Text> : null}
            <Text style={styles.textContent}>{state.chosenNote.content}</Text>
            {state.chosenNote.points.map(item => (<NotePointText colors={colors} item={item} key={item.uid} onChangePointProgress={controller.onChangePointProgress} />))}
        </View>
    )
}

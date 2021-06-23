import React, { FC, useEffect, useMemo } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from './styles';
import { HeaderNoteDetail } from './headerNoteDetail';
import { NotePointText } from './notePointText';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { INotePresenter } from '../../presenter/INotePresenter';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    notePresenter: INotePresenter;
}

export const NoteDetailView: FC<Props> = ({ navigation, colors, t, notePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { return controller.clear }, []);

    return (
        <View style={styles.container}>
            <HeaderNoteDetail navigation={navigation} colors={colors} gotToEdit={controller.gotToEdit} onDelete={controller.onDelete} />
            {state.chosenNote.title ? <Text style={styles.textTitle}>{state.chosenNote.title}</Text> : null}
            <Text style={styles.textContent}>{state.chosenNote.content}</Text>
            {state.chosenNote.points.map(item => (<NotePointText colors={colors} item={item} key={item.uid} onChangePointProgress={controller.onChangePointProgress} />))}
        </View>
    )
}

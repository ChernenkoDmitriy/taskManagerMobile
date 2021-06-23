import React, { FC, useMemo } from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { SocketIO } from '../../../../libs/socket';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { ButtonCreateTask } from '../../../mainPage/ui/buttonCreateTask';
import { INotePresenter } from '../../presenter/INotePresenter';
import { MyNotes } from './myNotes';
import { NoteListHeader } from './noteListHeader';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    notePresenter: INotePresenter;
}

const socket = new SocketIO()

export const NoteListView: FC<Props> = ({ navigation, colors, t, notePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    useEffect(()=>{
        socket.connect("uid", 'token');
    },[])

    return (
        <View style={styles.container}>
            <NoteListHeader colors={colors} title={t('noteTab')} />
            <MyNotes t={t} colors={colors} notes={state.notes} navigation={navigation} onChoseNote={controller.onChoseNote} convertTimeToString={controller.convertTimeToString} />
            <ButtonCreateTask colors={colors} onPress={() => { navigation.navigate('EditNoteScreen') }} />
        </View>
    )
}

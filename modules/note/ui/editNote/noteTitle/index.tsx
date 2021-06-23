import React, { FC, useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    t: (key: string) => string;
    colors: IColors;
    onChangeNoteTitle: (data: string) => void;
    noteTitle: string;
}

export const NoteTitle: FC<Props> = ({ colors, noteTitle, onChangeNoteTitle, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <TextInput
                style={styles.inputNoteTitle}
                placeholder={t('title')}
                placeholderTextColor={colors.inactiveText}
                value={noteTitle}
                onChangeText={onChangeNoteTitle}
            />
        </View>

    )
}

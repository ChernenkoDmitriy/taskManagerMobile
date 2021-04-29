import React, { FC, useMemo, useRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    t: (key: string) => string;
    colors: IColors;
    onChangeNoteTitle: (data: string) => void;
    noteTitle: string;
    onChangeNoteContent: (data: string) => void;
    noteContent: string;
}

export const CreateNote: FC<Props> = ({ colors, noteTitle, onChangeNoteTitle, noteContent, onChangeNoteContent, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const contentInput = useRef<TextInput>(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleInputWrapper} >
                <TextInput
                    style={styles.inputNoteTitle}
                    placeholder={t('title')}
                    placeholderTextColor={colors.inactiveText}
                    value={noteTitle}
                    onChangeText={onChangeNoteTitle}
                />
            </View>
            <Pressable style={styles.contentInputWrapper} onPress={() => contentInput.current?.focus()}>
                <TextInput
                    multiline
                    autoFocus
                    ref={contentInput}
                    style={styles.inputNoteContent}
                    placeholder={t('note')}
                    placeholderTextColor={colors.inactiveText}
                    value={noteContent}
                    onChangeText={onChangeNoteContent}
                />
            </Pressable>
        </View>
    )
}

import React, { FC, useMemo, useRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DeleteIcon } from '../../../../assets/icons/DeleteIcon';
import { IColors } from '../../../../src/colorTheme';
import { NotePoint } from '../../../common/models/INote';
import { CustomCheckBox } from '../../../common/ui/customCheckBox';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    noteContent: string;
    t: (key: string) => string;
    onChangeNoteContent: (data: string, index?: number) => void;
    notePoints:NotePoint[];
    onDeletePoint: (uid: string) => void;
    onChangePoint: (data: string, uid: string) => void;
    onChangePointProgress: (uid: string) => void;
}

export const NoteContent: FC<Props> = ({ colors, t, noteContent, onChangeNoteContent, notePoints, onDeletePoint, onChangePoint, onChangePointProgress }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const contentInput = useRef<TextInput>(null);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
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
            </View>
            {
                notePoints.map(item => (
                    <View style={styles.pointContainer} key={item.uid}>
                        <View style={styles.checkboxContainer}>
                            <CustomCheckBox colors={colors} value={item.isDone} onChoose={() => { onChangePointProgress(item.uid) }} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                multiline
                                placeholder={t('note')}
                                placeholderTextColor={colors.inactiveText}
                                style={[styles.inputNotePoint,  { textDecorationLine: item.isDone ? 'line-through' : 'none' }]}
                                value={item.text}
                                onChangeText={(data: string) => { onChangePoint(data, item.uid) }}
                            />
                        </View>
                        <Pressable onPress={() => onDeletePoint(item.uid)} style={({ pressed }) => [styles.buttonDelete, { opacity: pressed ? 0.5 : 1 }]}  >
                            <DeleteIcon />
                        </Pressable>
                    </View>
                ))
            }
        </ScrollView >
    )
}

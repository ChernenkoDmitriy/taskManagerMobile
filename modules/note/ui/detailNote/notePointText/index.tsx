import React, { FC, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { NotePoint } from '../../../../common/models/INote';
import { CustomCheckBox } from '../../../../common/ui/customCheckBox';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    item: NotePoint;
    onChangePointProgress: (id: string) => void;
}

export const NotePointText: FC<Props> = ({ colors, item, onChangePointProgress }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <View style={styles.checkboxContainer}>
                <CustomCheckBox colors={colors} value={item.isDone} onChoose={() => { onChangePointProgress(item.uid) }} />
            </View>
            <Pressable style={styles.textWrapper} onPress={() => { onChangePointProgress(item.uid) }}>
                <Text style={[styles.textNotePoint, { textDecorationLine: item.isDone ? 'line-through' : 'none' }]}>{item.text}</Text>
            </Pressable>
        </View>
    )
}

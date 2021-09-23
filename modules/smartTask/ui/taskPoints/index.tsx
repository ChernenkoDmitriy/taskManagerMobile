import React, { FC, useMemo } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import DeleteIcon from '../../../../icons/delete';
import { IColors } from '../../../../src/colorTheme';
import { TSmartTaskPoint } from '../../../common/models/ISmartTask';
import { CustomCheckBox } from '../../../common/ui/customCheckBox';

import { getStyle } from './styles';

interface Props {
    colors: IColors;
    t: (key: string) => string;
    points: TSmartTaskPoint[];
    onDeletePoint: (uid: string) => void;
    onChangePoint: (data: string, uid: string) => void;
    onChangePointProgress: (uid: string) => void;
}

export const TaskPoints: FC<Props> = ({ colors, t, points, onDeletePoint, onChangePoint, onChangePointProgress }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (!!points.length
        ? <>
            {points.map(item => (
                <View style={styles.pointContainer} key={item.id}>
                    <View style={styles.checkboxContainer}>
                        <CustomCheckBox colors={colors} value={item.isDone} onChoose={() => { onChangePointProgress(item.id) }} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            multiline
                            placeholder={t('note')}
                            placeholderTextColor={colors.inactiveText}
                            style={[styles.inputNotePoint, { textDecorationLine: item.isDone ? 'line-through' : 'none' }]}
                            value={item.text}
                            onChangeText={(data: string) => { onChangePoint(data, item.id) }}
                        />
                    </View>
                    <Pressable onPress={() => onDeletePoint(item.id)} style={({ pressed }) => [styles.buttonDelete, { opacity: pressed ? 0.5 : 1 }]}  >
                        <DeleteIcon />
                    </Pressable>
                </View>

            ))}
        </>
        : null
    )
}

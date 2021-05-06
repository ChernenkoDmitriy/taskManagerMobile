import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { DoneIcon } from '../../../../assets/icons/DoneIcon';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    onAddPoint: () => void;
}

export const NoteContentMenu: FC<Props> = ({ colors, onAddPoint }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onAddPoint}>
                <View style={styles.checkBoxContainer}>
                    <DoneIcon width={18} height={18} />
                </View>
            </Pressable>
        </View>
    )
}

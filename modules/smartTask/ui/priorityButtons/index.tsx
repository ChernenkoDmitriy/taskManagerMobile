import React, { FC, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { ArrowUpIcon } from '../../../../assets/icons/ArrowUpIcon';
import { IColors } from '../../../../src/colorTheme';
import { TTaskPriority } from '../../../common/models/ISmartTask';
import { getStyle } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    colors: IColors;
    chosenPriority: TTaskPriority;
    priorities: TTaskPriority[];
    isOpened: boolean;
    onChosePriority: (data: TTaskPriority) => void;
    onOpenMenu: () => void;
}

export const PriorityButtons: FC<Props> = ({ colors, chosenPriority, isOpened, onChosePriority, onOpenMenu }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        isOpened
            ?
            <View style={[styles.container]} >
                <View style={styles.absoluteButtonsContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { onChosePriority('high') }}>
                        <ArrowUpIcon color={colors.high} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { onChosePriority('medium') }}>
                        <ArrowUpIcon color={colors.medium} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { onChosePriority('low') }}>
                        <ArrowUpIcon color={colors.low} />
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={[styles.container, { paddingLeft: 2, paddingBottom: 4, }]} >
                <Pressable style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onOpenMenu}>
                    <ArrowUpIcon color={colors[chosenPriority] || undefined} />
                </Pressable>
            </View>
    )
}

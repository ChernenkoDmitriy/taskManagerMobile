import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { DoneIcon } from '../../../../assets/icons/DoneIcon';
import { IColors } from '../../../../src/colorTheme';
import { TTaskPriority } from '../../../common/models/ISmartTask';
import { PriorityButtons } from '../priorityButtons';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    onAddPoint: () => void;
    // chosenPriority: TTaskPriority;
    // priorities: TTaskPriority[];
    // isOpenedPriorityMenu: boolean;
    // onChosePriority: (data: TTaskPriority) => void;
    // onOpenMenu: () => void;
}

export const TaskContentMenu: FC<Props> = ({ colors, onAddPoint,
    // chosenPriority, priorities, isOpenedPriorityMenu, onOpenMenu, onChosePriority
}) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            {/* <PriorityButtons colors={colors} chosenPriority={chosenPriority} priorities={priorities}
                isOpened={isOpenedPriorityMenu} onChosePriority={onChosePriority} onOpenMenu={onOpenMenu} /> */}
            <Pressable style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onAddPoint}>
                <View style={styles.checkBoxContainer}>
                    <DoneIcon width={18} height={18} />
                </View>
            </Pressable>

        </View>
    )
}

import React, { FC, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { DeleteIcon } from '../../../../assets/icons/DeleteIcon';
import { DoneIcon } from '../../../../assets/icons/DoneIcon';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { HeaderWithBackButton } from '../../../common/ui/headerWithBackButton';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    onDone: (navigation: IStackNavigation) => void;
    onDelete: (navigation: IStackNavigation) => void;
}

export const HeaderNoteDetail: FC<Props> = ({ navigation, colors, onDone, onDelete }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <HeaderWithBackButton navigation={navigation} colors={colors}
            rightComponent={
                <View style={styles.container}>
                    <Pressable onPress={() => { onDelete(navigation) }} style={({ pressed }) => [styles.buttonDone, { opacity: pressed ? 0.5 : 1 }]} >
                        <DeleteIcon width={24} height={24} />
                    </Pressable>
                    <Pressable onPress={() => { onDone(navigation) }} style={({ pressed }) => [styles.buttonDone, { opacity: pressed ? 0.5 : 1 }]} >
                        <DoneIcon width={24} height={24} />
                    </Pressable>
                </View>
            } />
    )
}

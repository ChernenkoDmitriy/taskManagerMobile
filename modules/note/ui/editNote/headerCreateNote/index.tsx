import React, { FC, useMemo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { DoneIcon } from '../../../../../assets/icons/DoneIcon';
import { IColors } from '../../../../../src/colorTheme';
import { IStackNavigation } from '../../../../../src/navigation/INavigation/IStackNavigation';
import { HeaderWithBackButton } from '../../../../common/ui/headerWithBackButton';
import { getStyle } from './styles';

interface Props {
    isEdit: boolean;
    navigation: IStackNavigation;
    colors: IColors;
    createNote: () => void;
    isDisabledCreate: boolean;
    t: (key: string) => string;
}

export const HeaderCreateNote: FC<Props> = ({ navigation, colors, createNote, isDisabledCreate, t, isEdit }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <HeaderWithBackButton navigation={navigation} colors={colors}
            rightComponent={
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{isEdit ? t('editNote') : t('createNote')}</Text>
                    </View>
                    <Pressable
                        disabled={isDisabledCreate}
                        style={({ pressed }) => [styles.buttonDone, { opacity: (pressed || isDisabledCreate) ? 0.5 : 1 }]}
                        onPress={createNote}
                    >
                        <DoneIcon width={24} height={24} />
                    </Pressable>
                </View>
            } />
    )
}

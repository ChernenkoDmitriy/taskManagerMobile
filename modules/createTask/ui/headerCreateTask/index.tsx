import React, { FC, useMemo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { ArrowBackIcon } from '../../../../assets/icons/ArrowBackIcon';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    createNote: () => void;
}

export const HeaderCreateTask: FC<Props> = ({ navigation, colors, createNote }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.buttonSettings, { opacity: pressed ? 0.5 : 1 }]}
                onPress={navigation.goBack}
            >
                <ArrowBackIcon />
            </Pressable>
            <Pressable
                style={({ pressed }) => [styles.buttonSettings, { opacity: pressed ? 0.5 : 1 }]}
                onPress={createNote}
            >
                <Text>Create</Text>
            </Pressable>
        </View>
    )
}

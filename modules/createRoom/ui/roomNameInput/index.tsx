import React, { FC, useMemo } from 'react';
import { View, TextInput } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    onChangeText: (data: string) => void;
    value: string;
    placeholder: string;
}

export const RoomNameInput: FC<Props> = ({ colors, value, onChangeText, placeholder }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={colors.inactiveText}
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

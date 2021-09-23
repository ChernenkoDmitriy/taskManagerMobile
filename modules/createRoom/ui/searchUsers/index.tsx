import React, { FC, useMemo } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { SearchIcon } from '../../../../assets/icons/SearchIcon';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    onChangeText: (data: string) => void;
    onFindUsers: () => void;
    value: string;
    placeholder: string;
}

export const SearchUsers: FC<Props> = ({ colors, value, onChangeText, placeholder, onFindUsers }) => {
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
            <Pressable style={({ pressed }) => [styles.searchButton, { opacity: pressed ? 0.7 : 1 }]} onPress={onFindUsers}>
                <SearchIcon />
            </Pressable>
        </View>
    )
}

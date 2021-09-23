import React, { FC, useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    t: (key: string) => string;
    colors: IColors;
    onChangeTitle: (data: string) => void;
    title: string;
}

export const TaskTitle: FC<Props> = ({ colors, title, onChangeTitle, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TextInput
                multiline
                style={styles.inputTitle}
                placeholder={t('title')}
                placeholderTextColor={colors.inactiveText}
                value={title}
                onChangeText={onChangeTitle}
            />
        </View>
    );
};

import React, { FC, useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

import { getStyle } from './styles';

interface Props {
    colors: IColors;
    noteContent: string;
    t: (key: string) => string;
    onChangeContent: (data: string) => void;
}

export const TaskContent: FC<Props> = ({ colors, t, noteContent, onChangeContent }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <TextInput
                multiline
                autoFocus
                style={styles.inputContent}
                placeholder={t('note')}
                placeholderTextColor={colors.inactiveText}
                value={noteContent}
                onChangeText={onChangeContent}
            />
        </View>
    )
}

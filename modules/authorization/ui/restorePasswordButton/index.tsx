import React, { FC, useMemo, memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    title: string;
    onPress: () => void;
    colors: IColors;
}

export const RestorePasswordButton: FC<Props> = memo(({ title, onPress, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    console.log('RestorePasswordButton')

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]}
                onPress={onPress}
                testID={`buttonRestorePasswordButton`}
                accessibilityLabel={`buttonRestorePasswordButton`}
            >
                <Text style={styles.text} testID={`textRestorePasswordButton`} accessibilityLabel={`textRestorePasswordButton`}>{title}</Text>
            </Pressable>
        </View>
    );
})

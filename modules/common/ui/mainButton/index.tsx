import React, { FC, useMemo } from 'react';
import { Text, Pressable, ActivityIndicator, View } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    title: string;
    onPress: () => void;
    testID: string;
    colors: IColors;
    disabled?: boolean;
    inProgress?: boolean;
}

export const MainButton: FC<Props> = ({ onPress = () => { }, title = '', testID, colors, disabled = false, inProgress = false }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [styles.container, { opacity: pressed || disabled ? 0.7 : 1 }]}
            onPress={onPress}
            testID={`mainButton${testID}`}
            accessibilityLabel={`mainButton${testID}`}
        >
            <Text style={styles.text} testID={`text${testID}`} accessibilityLabel={`text${testID}`}>{title}</Text>
            {inProgress ? <View style={styles.absoluteSheet}><ActivityIndicator color={colors.accentColorLight} size='large' /></View> : null}
        </Pressable>
    );
}

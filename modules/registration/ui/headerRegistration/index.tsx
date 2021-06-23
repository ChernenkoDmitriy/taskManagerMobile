import React, { FC, useMemo } from 'react';
import { Text, View, Pressable } from 'react-native';
import { ArrowIosLeft } from '../../../../assets/icons/arrowIos/ArrowIosLeft';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    title: string;
    buttonText: string;
    onPress: () => void;
    colors: IColors;
};

export const HeaderRegistration: FC<Props> = ({ title, buttonText, onPress, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]} onPress={onPress} testID={'buttonHeaderRegistration'}>
                <ArrowIosLeft />
                <Text style={styles.buttonText} testID={'buttonTextHeaderRegistration'} numberOfLines={1}>{buttonText}</Text>
            </Pressable>
            <Text style={styles.title} testID={'textTitleHeaderRegistration'} numberOfLines={1}>{title.toUpperCase()}</Text>
        </View>
    );
};

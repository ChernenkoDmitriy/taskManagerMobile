import React, { FC, useCallback, useMemo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { ArrowBackIcon } from '../../../../assets/icons/ArrowBackIcon';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    title?: string;
    onPressTittle?: () => void;
    navigation: IStackNavigation;
    colors: IColors;
    rightComponent?: React.ReactNode;
    isBackAvailable?: boolean;
}

export const HeaderWithBackButton: FC<Props> = ({ onPressTittle, navigation, colors, rightComponent, title, isBackAvailable = true }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onGoBack = useCallback(() => {
        navigation.canGoBack() && navigation.goBack();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                {isBackAvailable && <Pressable
                    style={({ pressed }) => [styles.buttonBack, { opacity: pressed ? 0.5 : 1 }]}
                    onPress={onGoBack}
                >
                    <ArrowBackIcon />
                </Pressable>}
                {!!title &&
                    <View style={styles.titleContainer}>
                        <Pressable style={({ pressed }) => [styles.titleContainerButton, { opacity: pressed ? 0.5 : 1 }]} disabled={!onPressTittle} onPress={onPressTittle}>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        </Pressable>
                    </View>
                }
            </View>
            {rightComponent}
        </View>
    )
}

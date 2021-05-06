import React, { FC, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { ArrowBackIcon } from '../../../../assets/icons/ArrowBackIcon';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    rightComponent?: React.ReactNode;
}

export const HeaderWithBackButton: FC<Props> = ({ navigation, colors, rightComponent }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.buttonBack, { opacity: pressed ? 0.5 : 1 }]}
                onPress={navigation.goBack}
            >
                <ArrowBackIcon />
            </Pressable>
            {rightComponent}
        </View>
    )
}

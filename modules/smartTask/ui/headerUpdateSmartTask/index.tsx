import React, { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { HeaderWithBackButton } from '../../../common/ui/headerWithBackButton';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    onSave: () => void;
}

export const HeaderUpdateSmartTask: FC<Props> = ({ navigation, colors, onSave }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    return (
        <HeaderWithBackButton navigation={navigation} colors={colors}
            rightComponent={
                <Pressable style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onSave}>
                    <Text>Save</Text>
                </Pressable>
            }
        />
    )
}

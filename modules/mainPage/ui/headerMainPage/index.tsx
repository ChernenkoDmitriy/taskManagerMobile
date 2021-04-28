import React, { FC, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { SettingsIcon } from '../../../../assets/icons/SettingsIcon';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
}

export const HeaderMainPage: FC<Props> = ({ navigation, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.buttonSettings, { opacity: pressed ? 0.5 : 1 }]}
                onPress={() => { }}
                testID={`buttonSettings`}
                accessibilityLabel={`buttonSettings`}
            >
                <SettingsIcon width={36} height={36} />
            </Pressable>
        </View>
    )
}

import React, { FC, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { ArrowBackIcon } from '../../../../assets/icons/ArrowBackIcon';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    goBack: () => void;
    colors: IColors;
}

export const HeaderMainPage: FC<Props> = ({ goBack, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.buttonBack, { opacity: pressed ? 0.5 : 1 }]}
                onPress={goBack}
                testID={`buttonSettings`}
                accessibilityLabel={`buttonSettings`}
            >
                <ArrowBackIcon width={24} height={24} />
            </Pressable>
        </View>
    )
}

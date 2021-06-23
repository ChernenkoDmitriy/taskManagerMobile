import React, { FC, useMemo, ReactElement } from 'react';
import { Text, View, Pressable } from 'react-native';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';
import { ArrowIosRight } from '../../../../assets/icons/arrowIos/ArrowIosRight';

interface Props {
    colors: IColors;
    icon: ReactElement;
    onPress: () => void;
    title: string;
    counter?: number;
    testID?: string;
};

export const ProfileViewItem: FC<Props> = ({ icon, onPress, title, testID, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable style={({ pressed }) => [{ ...styles.container }, { opacity: pressed ? 0.7 : 1, }]} onPress={onPress} testID={`ProfileViewItem${testID}`} accessibilityLabel={`ProfileViewItem${testID}`}>
            <View style={styles.leftIcon}>
                {icon}
            </View>
            <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title} testID={`ProfileViewItemTitle${testID}`} accessibilityLabel={`ProfileViewItemTitle${testID}`}>{title}</Text>
            </View>
            <View style={styles.rightIcon}>
                <ArrowIosRight color={colors.titleText} />
            </View>
        </Pressable>
    )
};
import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { GroupIcon } from '../../../../icons/groupIcon';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface IProps {
    colors: IColors;
}

export const RoomAvatar: FC<IProps> = ({ colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
            >
                <GroupIcon color={colors.titleText} width={60} height={60} />
            </Pressable>
        </View>
    );
};


import React, { FC, useMemo, memo } from 'react';
import { Pressable, Text } from 'react-native';
import { ExitIcon } from '../../../../icons/exitIcon';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface IProps {
    colors: IColors;
    t: (key: string) => string;
    onPress: () => void;
}

export const RowExit: FC<IProps> = memo(({ colors, t, onPress }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]}
        >
            <ExitIcon color={colors.icon} />
            <Text style={styles.text} numberOfLines={1}>{t('leaveGroup')}</Text>
        </Pressable>
    );
});

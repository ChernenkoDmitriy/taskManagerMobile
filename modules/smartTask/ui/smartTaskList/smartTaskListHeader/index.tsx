import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    title: string;
}

export const SmartTaskListHeader: FC<Props> = ({ title, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle} numberOfLines={1}>{title}</Text>
        </View>
    );
}

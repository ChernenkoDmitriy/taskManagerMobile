import React, { FC, useMemo } from 'react';
import { View, Image } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    uri: string;
    colors: IColors;
}

export const CardGame: FC<Props> = ({ uri, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (

        <View style={styles.container}>
            <Image source={{ uri: uri }} style={styles.backgroundImage} resizeMode='cover' />
        </View>

    )
}

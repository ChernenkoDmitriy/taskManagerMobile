import React, { FC, useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface Props {
    t: (key: string) => string;
    colors: IColors;
}

export const HeaderMainPage: FC<Props> = ({ colors, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={require('../../../../assets/img/logo.png')} style={styles.imageLogo} />
                <Text style={styles.textTitle}>{t('appName')}</Text>
            </View>
        </View>
    )
}

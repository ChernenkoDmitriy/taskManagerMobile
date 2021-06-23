import React, { FC, useMemo } from 'react';
import { Text, View, Pressable } from 'react-native';
import { ArrowIosLeft } from '../../../../assets/icons/arrowIos/ArrowIosLeft';
import { ArrowIosRight } from '../../../../assets/icons/arrowIos/ArrowIosRight';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    t: (key: string) => string;
    navigation: IStackNavigation;
    colors: IColors;
}

export const HeaderAuthorization: FC<Props> = ({ t, navigation, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.buttonLeft, { opacity: pressed ? 0.5 : 1 }]} onPress={navigation.goBack} testID={'buttonHeaderAuthorization'}>
                <ArrowIosLeft />
                <Text style={styles.buttonTextLeft} testID={'buttonTextHeaderAuthorization'} numberOfLines={1}>{t('back')}</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.buttonRight, { opacity: pressed ? 0.5 : 1 }]} onPress={() => navigation.navigate('RegistrationScreen')} testID={'buttonHeaderAuthorization'}>
                <Text style={styles.buttonTextRight} testID={'buttonTextHeaderAuthorization'} numberOfLines={1}>{t('signUp')}</Text>
                <ArrowIosRight />
            </Pressable>
        </View>
    );
}

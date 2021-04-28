import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IMainPagePresenter } from '../presenter/IMainPagePresenter';
import { MainButton } from '../../common/ui/mainButton';
import { HeaderMainPage } from './headerMainPage';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    mainPagePresenter: IMainPagePresenter;
}

export const MainPageView: FC<Props> = ({ navigation, colors, t, mainPagePresenter }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <HeaderMainPage colors={colors} navigation={navigation} />
            <View style={styles.buttonWrapper}>
                <MainButton title={t('play')} testID='Play' onPress={() => { navigation.navigate('ChooseGameScreen') }} colors={colors} />
                <MainButton title={t('continue')} testID='Continue' onPress={() => { }} colors={colors} />
                <MainButton title={t('exit')} testID='Exit' onPress={() => { }} colors={colors} />
            </View>
        </View>
    )
}

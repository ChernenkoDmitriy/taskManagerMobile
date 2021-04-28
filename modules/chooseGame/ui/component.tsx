import React, { FC, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IChooseGamePresenter } from '../presenter/IChooseGamePresenter';
import { HeaderMainPage } from './headerChooseGame';
import { CardGame } from './cardGame';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    chooseGamePresenter: IChooseGamePresenter;
}
const imgs = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkvINBgho3-VkLdtzHjzSXFxRg3PoXK5GKA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVavVsW7JTk9M_PJswnSCKGCcuXerD9M5c8w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TynY-_ACefnDck1_X5I1eFP3CyhU5Iutfw&usqp=CAU'
]

export const ChooseGameView: FC<Props> = ({ navigation, colors, t, chooseGamePresenter }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <HeaderMainPage colors={colors} goBack={navigation.goBack} />
            <ScrollView horizontal style={styles.scroll} contentContainerStyle={styles.scrollContainer}
                scrollEventThrottle={16}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {imgs.map(item => (<CardGame colors={colors} uri={item} key={item} />))}
            </ScrollView>
        </View>
    )
}

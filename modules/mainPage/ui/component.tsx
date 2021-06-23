import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IMainPagePresenter } from '../presenter/IMainPagePresenter';
import { MyNotes } from '../../note/ui/noteList/myNotes';
import { ButtonCreateTask } from './buttonCreateTask';
import { HeaderMainPage } from './headerMainPage';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    mainPagePresenter: IMainPagePresenter;
}

export const MainPageView: FC<Props> = ({ navigation, colors, t, mainPagePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <HeaderMainPage t={t} colors={colors} onOpenProfile={() => { navigation.navigate('ProfileScreen') }} />
            <MyNotes t={t} title={t('myNotes')} colors={colors} notes={state.notes} navigation={navigation} onChoseNote={controller.onChoseNote} convertTimeToString={controller.convertTimeToString} />
            <ButtonCreateTask colors={colors} onPress={() => { navigation.navigate('EditNoteScreen') }} />
        </View>
    )
}

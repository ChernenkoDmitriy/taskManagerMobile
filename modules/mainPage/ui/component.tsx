import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IMainPagePresenter } from '../presenter/IMainPagePresenter';
import { MyNotes } from './myNotes';
import { ButtonCreateTask } from './buttonCreateTask';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    mainPagePresenter: IMainPagePresenter;
}

export const MainPageView: FC<Props> = ({ navigation, colors, t, mainPagePresenter: { state } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <MyNotes t={t} colors={colors} notes={state.notes} />
            <ButtonCreateTask colors={colors} onPress={() => { navigation.navigate('CreateTaskScreen') }} />
        </View>
    )
}

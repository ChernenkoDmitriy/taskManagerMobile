import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../../src/colorTheme';
import { ISmartTaskPresenter } from '../../presenter/ISmartTaskPresenter';
import { ButtonCreateTask } from '../../../mainPage/ui/buttonCreateTask';
import { SmartTaskListHeader } from './smartTaskListHeader';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    smartTaskPresenter: ISmartTaskPresenter;
}

export const SmartTaskListView: FC<Props> = ({ navigation, colors, t, smartTaskPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <SmartTaskListHeader colors={colors} title={t('smartTaskTab')} />
            <ButtonCreateTask colors={colors} onPress={() => { }} />
        </View>
    )
}

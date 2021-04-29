import React, { FC, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { ILaunchAppPresenter } from '../presenter/ILaunchAppPresenter';
import { IColors } from '../../../src/colorTheme';
import { getStyle } from './styles';
import Animated from 'react-native-reanimated';

interface Props {
    launchAppPresenter: ILaunchAppPresenter;
    colors: IColors;
}

export const LaunchAppView: FC<Props> = ({ launchAppPresenter: { launchAppController, launchAppState }, colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { launchAppController.launchAppData(); }, []);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.textLogo, {opacity:launchAppState.opacityLogo}]}>TASK MANAGER</Animated.Text>
        </View>
    );
}

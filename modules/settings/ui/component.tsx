import React, { FC, useMemo } from 'react';
import { Modal } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { ISettingsPresenter } from '../presenter/ISettingsPresenter';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    settingsPresenter: ISettingsPresenter;
}

export const SettingsView: FC<Props> = ({ navigation, colors, t, settingsPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Modal style={styles.container} visible={false}>

        </Modal>
    )
}

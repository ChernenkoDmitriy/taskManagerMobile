import React, { FC } from 'react';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { HeaderWithBackButton } from '../../../common/ui/headerWithBackButton';

interface Props {
    title: string;
    navigation: IStackNavigation;
    colors: IColors;
}

export const HeaderRoomsList: FC<Props> = ({ title, navigation, colors }) => {

    return (
        <HeaderWithBackButton colors={colors} navigation={navigation} title={title} isBackAvailable={false} />
    );
}

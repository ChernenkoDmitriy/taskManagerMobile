import React, { FC, useMemo } from 'react';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { HeaderWithBackButton } from '../../../common/ui/headerWithBackButton';
import { getStyle } from './styles';

interface Props {
    title: string;
    colors: IColors;
    navigation: IStackNavigation;
}

export const HeaderRoom: FC<Props> = ({ colors, title, navigation }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <HeaderWithBackButton navigation={navigation} colors={colors} title={title} />
    )
}

import React, { FC, useCallback, useMemo } from 'react';
import { View, Platform } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IProfilePresenter } from '../presenter/IProfilePresenter';
import { ToolBarProfile } from './toolBarProfile';
import { ProfileHeader } from './profileHeader';
import { ProfileViewItem } from './profileItem';
import { LanguageIcon } from '../../../assets/icons/LanguageIcon';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    profilePresenter: IProfilePresenter;
}

export const ProfileView: FC<Props> = ({ navigation, colors, t, profilePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const goToLogin = useCallback(() => { navigation.navigate('AuthorizationScreen') }, []);

    return (
        <View style={styles.container}>
            <ToolBarProfile title={t('profile')} colors={colors} />
            <ProfileHeader colors={colors} user={state.user} logout={() => { }} t={t} goToLogin={goToLogin} />
            <ProfileViewItem icon={<LanguageIcon color={colors.accentColorLight} />} title={t('language')} colors={colors} onPress={() => { navigation.navigate('ChangeLanguageScreen') }} testID={'ProfileView'} />
        </View>
    )
}

import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
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

export const ProfileView: FC<Props> = ({ navigation, colors, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <ToolBarProfile closeModal={navigation.goBack} title={t('profile')} colors={colors} />
            <ProfileHeader colors={colors} name={''} email={''} phone={''} logout={() => { }} t={t} navigation={navigation} />
            <ProfileViewItem icon={<LanguageIcon color={colors.accentColorLight} />} title={t('language')} colors={colors} onPress={() => { navigation.navigate('ChangeLanguageScreen') }} testID={'ProfileView'} />
        </View>
    )
}

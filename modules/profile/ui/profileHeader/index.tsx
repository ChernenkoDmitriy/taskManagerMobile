import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { LogoutIcon } from '../../../../assets/icons/LogoutIcon';
import { UserLogoUnknownIcon } from '../../../../assets/icons/UserLogoUnknownIcon';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    name: string;
    email: string;
    phone: string;
    logout: () => void;
    t: (key: string) => string;
    navigation: IStackNavigation;
};

export const ProfileHeader: FC<Props> = ({ colors, name, email, phone, logout, t, navigation }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <UserLogoUnknownIcon width={48} height={48} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.text} numberOfLines={1}>{name}</Text>
                <Text style={styles.text} numberOfLines={1}>{email}</Text>
                <Text style={styles.text} numberOfLines={1}>{phone}</Text>
            </View>
            {/* <Pressable
                style={({ pressed }) => [styles.buttonLogout, { opacity: pressed ? 0.7 : 1 }]}
                onPress={logout}
                testID={`buttonLogoutProfile`}
                accessibilityLabel={`buttonLogoutProfile`}
            >
                <LogoutIcon width={32} height={32} color={colors.titleText} />
            </Pressable> */}
            <Pressable
                style={({ pressed }) => [styles.buttonLogout, { opacity: pressed ? 0.7 : 1 }]}
                onPress={() => { navigation.navigate('AuthorizationScreen') }}
                testID={`buttonLogoutProfile`}
                accessibilityLabel={`buttonLogoutProfile`}
            >
                <Text style={styles.textButtonSignIn}>{t('signIn')}</Text>
            </Pressable>
        </View>
    );
};


import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { UserLogoUnknownIcon } from '../../../../assets/icons/UserLogoUnknownIcon';
import { IColors } from '../../../../src/colorTheme';
import { IUser } from '../../../common/models/IUser';
import { TextButton } from '../../../common/ui/textButton';
import { getStyle } from './styles';

interface Props {
    colors: IColors;
    user: IUser | null;
    logout: () => void;
    goToLogin: () => void;
    t: (key: string) => string;
}

export const ProfileHeader: FC<Props> = ({ colors, user, logout, goToLogin, t }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <UserLogoUnknownIcon width={48} height={48} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.text} numberOfLines={1}>{user?.name}</Text>
                <Text style={styles.text} numberOfLines={1}>{user?.email}</Text>
                <Text style={styles.text} numberOfLines={1}>{user?.phone}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                {user ? <TextButton colors={colors} title={t('signOut')} onPress={logout} testID={'signOut'} />
                    : <TextButton colors={colors} title={t('signIn')} onPress={goToLogin} testID={'signIn'} />}
            </View>
        </View>
    )
}

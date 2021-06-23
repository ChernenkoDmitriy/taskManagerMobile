import React, { FC, useEffect, useMemo } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IAuthorizationPresenter } from '../presenter/IAuthorizationPresenter';
import { HeaderAuthorization } from './headerAuthorization';
import { CustomTextInput } from '../../common/ui/customTextInput';
import { RestorePasswordButton } from './restorePasswordButton';
import { MainButton } from '../../common/ui/mainButton';
import { Util } from '../../../src/util/Util';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    authorizationPresenter: IAuthorizationPresenter;
}

export const AuthorizationView: FC<Props> = ({ navigation, colors, t, authorizationPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { return controller.onUnmounted }, []);

    return (
        <ScrollView style={styles.container} keyboardDismissMode='interactive' keyboardShouldPersistTaps={'handled'} bounces={false}>
            <HeaderAuthorization colors={colors} navigation={navigation} t={t} />
            <CustomTextInput colors={colors} placeholder={t('email')} errorMessage={state.email.errorMessage && t(state.email.errorMessage)} value={state.email.value}
                onChangeText={controller.onChangeEmail} testID={'inputEmailAuthorization'} onBlur={controller.onValidateEmail} />
            <CustomTextInput colors={colors} placeholder={t('password')} errorMessage={state.password.errorMessage && t(state.password.errorMessage)} value={state.password.value}
                onChangeText={controller.onChangePassword} testID={'inputPasswordAuthorization'} onBlur={controller.onValidatePassword}/>
            <RestorePasswordButton colors={colors} onPress={() => navigation.navigate('RestorePasswordScreen')} title={t('forgotPass')} />
            <View style={styles.buttonWrapper}>
                <MainButton testID='buttonAuthorization' onPress={controller.onAuthorize} title={t('enter')} colors={colors}
                    disabled={state.isAuthorizationDisabled} inProgress={state.isLoading} />
            </View>
        </ScrollView>
    )
}

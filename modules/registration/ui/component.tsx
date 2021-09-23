import React, { FC, useCallback, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IRegistrationPresenter } from '../presenter/IRegistrationPresenter';
import { HeaderRegistration } from './headerRegistration';
import { CustomTextInput } from '../../common/ui/customTextInput';
import { MainButton } from '../../common/ui/mainButton';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    registrationPresenter: IRegistrationPresenter;
}

export const RegistrationView: FC<Props> = ({ navigation, colors, t, registrationPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const onRegister = useCallback(() => { controller.onRegister(navigation) }, []);

    return (
        <ScrollView style={styles.container} keyboardDismissMode='interactive' keyboardShouldPersistTaps={'handled'} bounces={false}>
            <HeaderRegistration colors={colors} title={t('signUp')} buttonText={t('signIn')} onPress={() => navigation.navigate('AuthorizationScreen')} />
            <View style={styles.inputsContainer}>
                <CustomTextInput colors={colors} placeholder={t('name')} errorMessage={state.name.errorMessage && t(state.name.errorMessage)} value={state.name.value}
                    onChangeText={controller.onChangeName} testID='inputNameRegistration' onBlur={controller.onValidateName} />
                <CustomTextInput colors={colors} placeholder={t('email')} errorMessage={state.email.errorMessage && t(state.email.errorMessage)} value={state.email.value}
                    onChangeText={controller.onChangeEmail} testID={'inputEmailAuthorization'} onBlur={controller.onValidateEmail} keyboardType='email-address'/>
                <CustomTextInput colors={colors} placeholder={t('password')} errorMessage={state.password.errorMessage && t(state.password.errorMessage)}
                    value={state.password.value} onChangeText={controller.onChangePassword} testID={'inputPasswordAuthorization'} onBlur={controller.onValidatePassword} />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton testID='MainButtonAddRegistrationView' onPress={onRegister} title={t('signUpAction')} colors={colors}
                    disabled={state.isDisabled} inProgress={state.isLoading} />
            </View>
        </ScrollView>
    )
}

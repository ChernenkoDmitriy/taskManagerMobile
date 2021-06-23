import React, { FC, useMemo } from 'react';
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

    return (
        <ScrollView style={styles.container} keyboardDismissMode='interactive' keyboardShouldPersistTaps={'handled'} bounces={false}>
            <HeaderRegistration colors={colors} title={t('signUp')} buttonText={t('signIn')} onPress={() => navigation.navigate('AuthorizationScreen')} />
            <View style={styles.inputsContainer}>
                <CustomTextInput value={state.name.value} onChangeText={controller.onChangeName} placeholder={t('name')} testID='inputNameRegistration' colors={colors} />
                <CustomTextInput value={state.email.value} onChangeText={controller.onChangeEmail} placeholder={t('email')} testID='inputEmailRegistration' colors={colors} />
                <CustomTextInput value={state.password.value} onChangeText={controller.onChangePassword} placeholder={t('password')} testID='inputPasswordRegistration' colors={colors} />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton testID='MainButtonAddRegistrationView' onPress={controller.onRegister} title={t('signUpAction')} colors={colors} disabled={state.isDisabled} inProgress={state.isLoading} />
            </View>
        </ScrollView>
    )
}

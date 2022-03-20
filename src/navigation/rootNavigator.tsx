import React, { FC } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stackNavigator';
import { observer } from 'mobx-react';
import RNBootSplash from "react-native-bootsplash";
import { Utils } from '../utils/Utils';
import { SettingsModal } from '../../modules/settings/ui';

export const RootNavigation: FC = observer(() => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Utils.isIOS ? 'padding' : undefined}>
            <SafeAreaView style={{ flex: 1 }} >
                <NavigationContainer onReady={RNBootSplash.hide}>
                    <StackNavigator />
                </NavigationContainer>
                <SettingsModal />
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
});

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stackNavigator';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { observer } from 'mobx-react';
import RNBootSplash from "react-native-bootsplash";

export const RootNavigation: FC = observer(() => {

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} >
            <SafeAreaView style={{ flex: 1 }} >
                <NavigationContainer onReady={RNBootSplash.hide}>
                    <StackNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
})
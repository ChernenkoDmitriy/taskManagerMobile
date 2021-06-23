import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { BaseFactory } from '../baseFactory/BaseFactory';
import { LaunchAppScreen } from '../../modules/launchApp/ui';
import { TabNavigator } from './tabNavigator';
import { AuthorizationScreen } from '../../modules/authorization/ui';
import { ChangeLanguageScreen } from '../../modules/changeLanguage/ui';
import { RegistrationScreen } from '../../modules/registration/ui';
import { NoteDetailScreen } from '../../modules/note/ui/detailNote';
import { EditNoteScreen } from '../../modules/note/ui/editNote';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {
    const { isAppLoadedStore } = BaseFactory.get();

    return (
        <Stack.Navigator initialRouteName='LaunchAppScreen'>
            { isAppLoadedStore.data
                ? <>
                    <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />

                    <Stack.Screen name='EditNoteScreen' component={EditNoteScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='NoteDetailScreen' component={NoteDetailScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='ChangeLanguageScreen' component={ChangeLanguageScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='AuthorizationScreen' component={AuthorizationScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{ headerShown: false }} />
                </>
                : <Stack.Screen name='LaunchAppScreen' component={LaunchAppScreen} options={{ headerShown: false }} />
            }
        </Stack.Navigator >
    );
})

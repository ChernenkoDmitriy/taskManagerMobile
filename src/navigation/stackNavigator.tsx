import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { BaseFactory } from '../baseFactory/BaseFactory';
import { LaunchAppScreen } from '../../modules/launchApp/ui';
import { AuthorizationScreen } from '../../modules/authorization/ui';
import { ChangeLanguageScreen } from '../../modules/changeLanguage/ui';
import { RegistrationScreen } from '../../modules/registration/ui';
import { SmartTaskScreen } from '../../modules/smartTask/ui';
import { CreateRoomScreen } from '../../modules/createRoom/ui';
import { RoomScreen } from '../../modules/room/ui';
import { RoomsListScreen } from '../../modules/roomsList/ui';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {
    const { isAppLoadedStore, userStore } = BaseFactory.get();

    return (
        <Stack.Navigator initialRouteName='LaunchAppScreen'>
            {isAppLoadedStore.data
                ?
                userStore.data ? 
                <>
                    <Stack.Screen name='RoomsListScreen' component={RoomsListScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='RoomScreen' component={RoomScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='SmartTaskScreen' component={SmartTaskScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='CreateRoomScreen' component={CreateRoomScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='ChangeLanguageScreen' component={ChangeLanguageScreen} options={{ headerShown: false }} />
                </>
                    : <>
                        <Stack.Screen name='AuthorizationScreen' component={AuthorizationScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{ headerShown: false }} />
                    </>
                : 
                <Stack.Screen name='LaunchAppScreen' component={LaunchAppScreen} options={{ headerShown: false }} />
            }
        </Stack.Navigator >
    );
})

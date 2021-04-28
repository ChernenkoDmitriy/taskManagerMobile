import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { BaseFactory } from '../baseFactory/BaseFactory';
import { LaunchAppScreen } from '../../modules/launchApp/ui';
import { MainPageScreen } from '../../modules/mainPage/ui';
import { ChooseGameScreen } from '../../modules/chooseGame/ui';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {
    const { isAppLoadedStore } = BaseFactory.get();

    return (
        <Stack.Navigator initialRouteName='LaunchAppScreen' >
            { isAppLoadedStore.data
                ?
                <>
                    <Stack.Screen name='MainPageScreen' component={MainPageScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='ChooseGameScreen' component={ChooseGameScreen} options={{ headerShown: false }} />
                </>
                :
                <Stack.Screen name='LaunchAppScreen' component={LaunchAppScreen} options={{ headerShown: false }} />
            }
        </Stack.Navigator >
    );
})

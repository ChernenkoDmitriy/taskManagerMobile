import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MainPageScreen } from '../../modules/mainPage/ui';
import { ProfileScreen } from '../../modules/profile/ui';
import { observer } from 'mobx-react';
import { BaseFactory } from '../baseFactory/BaseFactory';
import { NoteListScreen } from '../../modules/smartTask/ui/smartTaskList';
import { ProfileIcon } from '../../assets/icons/tabBar/ProfileIcon';
import { HomeIcon } from '../../assets/icons/tabBar/HomeIcon';
import { NoteIcon } from '../../assets/icons/tabBar/NoteIcon';
import { SmartTaskListScreen } from '../../modules/smartTask/ui/smartTaskList';
import { TasksIcon } from '../../assets/icons/tabBar/TasksIcon';
import { RoomsListScreen } from '../../modules/roomsList/ui';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const TabNavigator: FC = observer(() => {
    const { localization: { t }, colorTheme: { colors } } = BaseFactory.get();

    return (
        <Tab.Navigator initialRouteName={'HomeTab'}   >
            <Tab.Screen name={'HomeTab'} component={StackHome}
                options={{
                    tabBarIcon: ({ focused }) => <HomeIcon width={20} height={20} color={focused ? colors.accentColorLight : colors.shadow} />,
                    title: t('homeTab'),
                }} />
            <Tab.Screen name={'RoomListTab'} component={StackRoomsList}
                options={{
                    tabBarIcon: ({ focused }) => <NoteIcon width={20} height={20} color={focused ? colors.accentColorLight : colors.shadow} />,
                    title: t('roomListTab'),
                }} />
            <Tab.Screen name={'SmartTaskTab'} component={StackSmartTask}
                options={{
                    tabBarIcon: ({ focused }) => <TasksIcon width={20} height={20} color={focused ? colors.accentColorLight : colors.shadow} />,
                    title: t('smartTaskTab'),
                }} />
            <Tab.Screen name={'ProfileTab'} component={StackProfile}
                options={{
                    tabBarIcon: ({ focused }) => <ProfileIcon width={20} height={20} color={focused ? colors.accentColorLight : colors.shadow} />,
                    title: t('profileTab'),
                }} />
        </Tab.Navigator>

    )
})

export const StackHome: FC = () => {
    return (
        <Stack.Navigator initialRouteName="MainPageScreen" >
            <Stack.Screen name='MainPageScreen' component={MainPageScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}

export const StackNote: FC = () => {
    return (
        <Stack.Navigator initialRouteName="NoteListScreen" >
            <Stack.Screen name='NoteListScreen' component={NoteListScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}

export const StackSmartTask: FC = () => {
    return (
        <Stack.Navigator initialRouteName="SmartTaskListScreen" >
            <Stack.Screen name="SmartTaskListScreen" component={SmartTaskListScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}

export const StackRoomsList: FC = () => {
    return (
        <Stack.Navigator initialRouteName="RoomsListScreen" >
            <Stack.Screen name="RoomsListScreen" component={RoomsListScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}

const StackProfile: FC = () => {
    return (
        <Stack.Navigator initialRouteName="MoreScreen" >
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
}

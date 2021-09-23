import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { observer } from 'mobx-react';
import { RoomScreen } from '../../modules/room/ui';
import { CustomDrawerContent } from '../../modules/customDrawerContent';
import { RoomsListScreen } from '../../modules/roomsList/ui';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: FC = observer(() => {
    return (
        <Drawer.Navigator drawerType={'front'} initialRouteName='RoomsListScreen'  drawerContent={(props) => <CustomDrawerContent {...props} />}>

        </Drawer.Navigator >
    );
})

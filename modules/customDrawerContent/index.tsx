import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, } from '@react-navigation/drawer';

export const CustomDrawerContent: FC<any> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Tratata</Text>
            </View>
        </DrawerContentScrollView>
    );
}
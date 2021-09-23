import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { StartAnimation } from './startAnimation/startAnimation';

export const SplashScreen: FC<{}> = () => {
    return (
        <View style={styles.container}>
            <StartAnimation />
        </View>
    );
}

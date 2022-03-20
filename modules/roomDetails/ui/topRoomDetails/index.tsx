import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import ArrowBackIcon from '../../../../icons/arrowBack';
import { IColors } from '../../../../src/colorTheme';
import { RoomAvatar } from '../roomAvatar';
import { getStyle } from './styles';
 
interface IProps {
    colors: IColors;
    onCloseModal: () => void;
}

export const TopRoomDetails: FC<IProps> = ({ colors, onCloseModal }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [styles.buttonBack, { opacity: pressed ? 0.5 : 1 }]}
                onPress={onCloseModal}
            >
                <ArrowBackIcon color={colors.card} />
            </Pressable>
            <View style={styles.avatarContainer}>
                <RoomAvatar colors={colors}/>
            </View>
        </View>
    );
};


import React, { FC, useCallback, useMemo } from 'react';
import { Modal, SafeAreaView, View } from 'react-native';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IRoomDetailsPresenter } from '../presenter/IRoomDetailsPresenter';
import { TopRoomDetails } from './topRoomDetails';
import { RowExit } from './rowExit';
import { ModalPopup } from '../../common/ui/modalPopup';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<{}>;
    colors: IColors;
    t: (key: string) => string;
    roomDetailsPresenter: IRoomDetailsPresenter;
}

export const RoomDetailsView: FC<Props> = ({ navigation, colors, t, roomDetailsPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onLeaveGroup = useCallback(async () => {
        navigation.canGoBack() && navigation.goBack();
        await controller.onLeaveGroup();
    }, [])

    return (
        <Modal visible={state.isModalVisible} animationType='slide'>
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <TopRoomDetails colors={colors} onCloseModal={controller.onCloseModal} />
                    <View style={styles.rowsContainer}>
                        <RowExit {...{ colors, t }} onPress={controller.onShowLeaveGroupPopup} />
                    </View>
                </SafeAreaView>
                <ModalPopup
                    isVisible={state.isModalLeaveGroupVisible}
                    {...{ colors, t }}
                    onCancel={controller.onCloseLeaveGroupPopup}
                    onConfirm={onLeaveGroup}
                    text={t('doYouWannaLeaveGroup')}
                />
            </View>
        </Modal>
    )
}

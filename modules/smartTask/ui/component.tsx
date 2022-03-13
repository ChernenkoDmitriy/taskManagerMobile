import React, { FC, useEffect, useMemo, useState } from 'react';
import { Keyboard, View, ScrollView, Button } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { ISmartTaskPresenter } from '../presenter/ISmartTaskPresenter';
import { HeaderUpdateSmartTask } from './headerSmartTask';
import { TaskTitle } from './taskTitle';
import { TaskContent } from './taskContent';
import { TaskContentMenu } from './taskContentMenu';
import { TaskPoints } from './taskPoints';
import { useCallback } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    smartTaskPresenter: ISmartTaskPresenter;
}

export const SmartTaskView: FC<Props> = ({ navigation, colors, t, smartTaskPresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    useEffect(() => { return controller.onUnmounted }, [])
    const onSave = useCallback(() => { controller.onSave(navigation) }, []);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    // const handleConfirm = (date) => {

// const DATE_TEMPLATE_STRING_SHOW = 'DD.MM.YYYY';
// const DATE_TEMPLATE_STRING_STORE = 'YYYY/MM/DD';
    //     const stringDate = moment(date).format(DATE_TEMPLATE_STRING_STORE);

    //     onChangeText(stringDate);
    //     hideDatePicker();
    // };


    return (
        <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss as any}>
            <HeaderUpdateSmartTask colors={colors} navigation={navigation} onSave={onSave} />
            <ScrollView style={styles.scrollContainer}>
                <TaskTitle t={t} colors={colors} onChangeTitle={controller.onChangeTitle} title={state.chosenSmartTask.title} />
                <Button title={'showDatePicker'} onPress={showDatePicker} />
                <DateTimePickerModal
                    minimumDate={new Date()}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <TaskContent t={t} noteContent={state.chosenSmartTask.content} onChangeContent={controller.onChangeContent} colors={colors} />
                <TaskPoints t={t} colors={colors} points={state.chosenSmartTask.points} onDeletePoint={controller.onDeletePoint}
                    onChangePoint={controller.onChangePoint} onChangePointProgress={controller.onChangePointProgress} />
            </ScrollView >
            <TaskContentMenu colors={colors} onAddPoint={controller.onAddPoint} />
        </View>
    )
}

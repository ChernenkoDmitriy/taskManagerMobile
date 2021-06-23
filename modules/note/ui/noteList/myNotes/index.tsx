import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { IStackNavigation } from '../../../../../src/navigation/INavigation/IStackNavigation';
import { INote } from '../../../../common/models/INote';
import { MyNotesVerticalScroll } from './myNotesVerticalScroll';
import { getStyle } from './styles';

interface Props {
    notes: INote[];
    colors: IColors;
    t: (key: string) => string;
    navigation: IStackNavigation;
    onChoseNote: (navigation: IStackNavigation, note: INote) => void;
    convertTimeToString: (time: number) => string;
}

export const MyNotes: FC<Props> = ({ t, notes = [], colors, navigation, onChoseNote, convertTimeToString }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <MyNotesVerticalScroll {...{ t, notes, colors, navigation, onChoseNote, convertTimeToString }} />
        </View>
    );
}

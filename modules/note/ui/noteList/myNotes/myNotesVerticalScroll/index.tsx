
import React, { FC, useMemo } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { IColors } from '../../../../../../src/colorTheme';
import { IStackNavigation } from '../../../../../../src/navigation/INavigation/IStackNavigation';
import { INote } from '../../../../../common/models/INote';
import { getStyle } from './styles';

interface Props {
    notes: INote[];
    colors: IColors;
    t: (key: string) => string;
    navigation: IStackNavigation;
    onChoseNote: (navigation: IStackNavigation, note: INote) => void;
    convertTimeToString: (time: number) => string;
}

export const MyNotesVerticalScroll: FC<Props> = ({ t, notes = [], colors, navigation, onChoseNote, convertTimeToString }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                {
                    notes.map((item: INote) => (
                        <Pressable style={({ pressed }) => [styles.noteContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={() => { onChoseNote(navigation, item) }} key={item.uid}>
                            <View style={styles.contentNote}>
                                <View style={[styles.indicationPriority, { backgroundColor: colors[item.priority] }]} />
                                <View style={styles.textWrapper}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.titleContainer}>
                                            <Text numberOfLines={1} style={styles.titleText}>{item.title}</Text>
                                        </View>
                                        <View style={styles.timeContainer}>
                                            <Text numberOfLines={1} style={styles.textTime}>{convertTimeToString(item.lastUpdate)}</Text>
                                        </View>
                                    </View>
                                    <Text numberOfLines={2} style={styles.noteText}>{item.content}</Text>
                                </View>
                            </View>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </View>
    );
}

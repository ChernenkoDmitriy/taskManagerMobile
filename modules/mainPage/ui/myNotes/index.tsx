import React, { FC, useMemo } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { IStackNavigation } from '../../../../src/navigation/INavigation/IStackNavigation';
import { INote } from '../../../common/models/INote';
import { getStyle } from './styles';

interface Props {
    notes: INote[];
    colors: IColors;
    t: (key: string) => string;
    navigation: IStackNavigation;
    onChoseNote: (navigation: IStackNavigation, note: INote) => void;
}

export const MyNotes: FC<Props> = ({ t, notes = [], colors, navigation, onChoseNote }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('myNotes')}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                {
                    notes.map((item: INote) => (
                        <Pressable onPress={() => { onChoseNote(navigation, item) }} key={item.uid}>
                            <View style={styles.noteContainer} >
                                <Text numberOfLines={5} style={styles.noteText}>{item.content}</Text>
                            </View>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </View>
    );
}

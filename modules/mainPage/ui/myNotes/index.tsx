import React, { FC, useMemo } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { INote } from '../../../common/models/INote';
import { getStyle } from './styles';

interface Props {
    notes: INote[];
    colors: IColors;
    t: (key: string) => string;
}

export const MyNotes: FC<Props> = ({ t, notes = [], colors }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('myNotes')}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>
                {
                    notes.map((item: INote) => (
                        <View style={styles.noteContainer} key={item.id}>
                            <Text numberOfLines={5} style={styles.noteText}>{item.content}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

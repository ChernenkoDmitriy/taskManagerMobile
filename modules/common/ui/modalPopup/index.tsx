import React, { FC, useMemo, memo } from 'react';
import { Modal, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { IColors } from '../../../../src/colorTheme';
import { getStyle } from './styles';

interface IProps {
    title?: string;
    text?: string;
    isVisible: boolean;
    colors: IColors;
    t: (key: string) => string;
    onCancel?: () => void;
    onConfirm?: () => void;
}

export const ModalPopup: FC<IProps> = memo(({ title, text, colors, t, isVisible, onCancel, onConfirm }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Modal visible={isVisible} transparent>
            <View style={styles.absoluteContainer} onStartShouldSetResponder={onCancel as any} pointerEvents='box-only' />
            <View style={styles.container} pointerEvents='box-none'>
                <View style={styles.modalContainer} >
                    {!!title && <Text style={styles.title}>{title}</Text>}
                    {!!text && <Text style={styles.text}>{text}</Text>}
                    <View style={styles.buttonWrapper}>
                        {!!onCancel && <Pressable
                            onPress={onCancel}
                            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
                        >
                            <Text style={styles.buttonText} numberOfLines={1}>{t('cancel')}</Text>
                        </Pressable>}
                        {!!onConfirm && <Pressable
                            onPress={onConfirm}
                            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
                        >
                            <Text style={styles.buttonText} numberOfLines={1}>{t('ok')}</Text>
                        </Pressable>}
                    </View>
                </View>
            </View>
        </Modal>
    );
});

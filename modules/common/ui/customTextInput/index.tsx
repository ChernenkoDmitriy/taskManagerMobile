import React, { FC, useMemo, useState } from "react";
import { TextInput, View, Text } from "react-native";
import { IColors } from "../../../../src/colorTheme";
import { getStyle } from "./styles";

interface Props {
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    testID: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | undefined;
    icon?: FC;
    errorMessage?: string;
    colors: IColors;
    onFocus?: () => void;
    onBlur?: () => void;
};

export const CustomTextInput: FC<Props> = ({ value, errorMessage, onChangeText, placeholder, icon, testID, colors, keyboardType, onFocus, onBlur }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [isFocused, setIsFocused] = useState(false);

    const onFocusFn = () => {
        onFocus && onFocus();
        setIsFocused(true);
    };

    const onBlurFn = () => {
        onBlur && onBlur();
        setIsFocused(false);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, { borderColor: isFocused ? colors.regularText : colors.inactiveText }]} >
                <TextInput
                    keyboardType={keyboardType || 'default'}
                    testID={testID}
                    accessibilityLabel={testID}
                    placeholderTextColor={colors.inactiveText}
                    style={styles.textInput}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    onFocus={onFocusFn}
                    onBlur={onBlurFn} />
                {icon ? <View style={styles.iconWrapper}>{icon} </View > : null}
            </View>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    );
};
import React, { FC, useMemo } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { IStackNavigation } from '../../../src/navigation/INavigation/IStackNavigation';
import { getStyle } from './styles';
import { IColors } from '../../../src/colorTheme';
import { IChangeLanguagePresenter } from '../presenter/IChangeLanguagePresenter';
import { HeaderWithBackButton } from '../../common/ui/headerWithBackButton';

interface Props {
    navigation: IStackNavigation;
    colors: IColors;
    t: (key: string) => string;
    changeLanguagePresenter: IChangeLanguagePresenter;
}

export const ChangeLanguageView: FC<Props> = ({ navigation, colors, t, changeLanguagePresenter: { state, controller } }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <HeaderWithBackButton navigation={navigation} colors={colors} title={t('chooseLanguage')} />
            <ScrollView style={styles.container}>
                {state.languageList?.map((item: string) =>
                    <Pressable onPress={() => controller.onChangeLanguage(item)} key={item} style={({ pressed }) => [styles.itemContainer, { opacity: pressed ? 0.5 : 1 }]} >
                        <View style={styles.iconWrapper}>
                            {/* {languageIcons(item.lang)} */}
                            <Text style={styles.languageText} >{t(item)}</Text>
                        </View>
                        <View style={styles.circleWrapper}>
                            <View style={state.locale === item ? styles.circleSelected : styles.circle}>
                                <View style={state.locale === item ? styles.circleFilled : {}} />
                            </View>
                        </View>
                    </Pressable>
                )}
            </ScrollView>
        </View>
    )
}

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import GradientChart from '../../assets/svg/gradientChart';

const { timing, Value, multiply, Clock, startClock, clockRunning, stopClock, block, cond, set, debug } = Animated;

export class BlockSlideChart extends Component {
    constructor(props) {
        super(props)
        this.translateX = new Value(0);
        this.clock = new Clock();
    }

    runTiming = (clock, value, dest) => {
        const state = {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            duration: 2000,
            toValue: new Value(0),
            easing: Easing.linear,
        };

        return block([
            cond(clockRunning(clock), [
                // if the clock is already running we update the toValue, in case a new dest has been passed in
                set(config.toValue, dest),
            ], [
                    // if the clock isn't running we reset all the animation params and start the clock
                    set(state.finished, 0),
                    set(state.time, 0),
                    set(state.position, value),
                    set(state.frameTime, 0),
                    set(config.toValue, dest),
                    startClock(clock),
                ]),
            // we run the step here that is going to update position
            timing(clock, state, config),
            // if the animation is over we stop the clock
            cond(state.finished, [
                // we stop
                stopClock(clock),

                // set flag ready to be restarted
                set(state.finished, 0),
                // same value as the initial defined in the state creation
                set(state.position, 4),

                // very important to reset this ones !!! as mentioned in the doc about timing is saying
                set(state.time, 0),
                set(state.frameTime, 0),

                // and we restart
                startClock(clock),
            ]),
            // we made the block return the updated position
            state.position,
        ]);
    }

    render() {
        const translateX = multiply(-1, this.runTiming(this.clock, 0, 64));
        return (
            <View style={styles.container}>
                {/* <View style={styles.animatedWrapper}> */}
                <Animated.View style={[styles.animatedWrapper, { transform: [{ translateX }] }]}>
                    <View style={{ width: 3, height: 5, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 7, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 4, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 10, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 17, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 13, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 10, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 16, backgroundColor: '#e65cc1' }} />

                    <View style={{ width: 3, height: 5, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 7, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 4, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 10, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 17, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 13, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 10, backgroundColor: '#e65cc1' }} />
                    <View style={{ width: 3, height: 16, backgroundColor: '#e65cc1' }} />
                </Animated.View>
                {/* </View> */}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    animatedWrapper: {
        height: 26,
        width: 120,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        paddingTop: 1,
    }
});
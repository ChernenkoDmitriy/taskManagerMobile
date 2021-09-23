import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

const { timing, Value, Clock, startClock, clockRunning, stopClock, block, cond, set, interpolate } = Animated;

export class BlockChart extends Component {
    constructor(props) {
        super(props)
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
                set(state.position, 0),

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
        const value = this.runTiming(this.clock, 0, 1);
        const firstBlock = interpolate(value, { inputRange: [0, 0.5, 1], outputRange: [11, 2, 11] });
        const secondBlock = interpolate(value, { inputRange: [0, 0.5, 1], outputRange: [14, 5, 14] });
        const thirdBlock = interpolate(value, { inputRange: [0, 0.5, 1], outputRange: [4, 17, 4] });
        const fourthBlock = interpolate(value, { inputRange: [0, 0.5, 1], outputRange: [22, 12, 22] });
        const fifthBlock = interpolate(value, { inputRange: [0, 0.5, 1], outputRange: [16, 24, 16] });
        return (
            <View style={styles.container} >
                <Animated.View style={[styles.animatedBlock, { height: firstBlock, backgroundColor: '#f25a57' }]} />
                <Animated.View style={[styles.animatedBlock, { height: secondBlock, backgroundColor: '#FFC0CB' }]} />
                <Animated.View style={[styles.animatedBlock, { height: thirdBlock, backgroundColor: '#f25a57' }]} />
                <Animated.View style={[styles.animatedBlock, { height: fourthBlock, backgroundColor: '#FFC0CB' }]} />
                <Animated.View style={[styles.animatedBlock, { height: fifthBlock, backgroundColor: '#f25a57' }]} />
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        paddingTop: 1,
    },
    animatedBlock: {
        width: '15%',
    }
});
export default BlockChart;
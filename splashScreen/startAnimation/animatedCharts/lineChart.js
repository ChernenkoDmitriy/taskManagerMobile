import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, } from "react-native-svg";
import Animated, { Easing } from "react-native-reanimated";
import { interpolatePath } from "react-native-redash";

const { timing, Value, Clock, startClock, clockRunning, stopClock, block, cond, set } = Animated;
const AnimatedPath = Animated.createAnimatedComponent(Path);

export class LineChart extends Component {
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
            duration: 2500,
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
        const d = interpolatePath(value, {
            inputRange: [0, 0.5, 1],
            outputRange: [
                'M0 20 L20 10 L40 15 L60 30 L80 25 L100 3 L120 30 L140 20 L160 30 L180 5 L200 10',
                'M0 20 L20 35 L40 30 L60 10 L80 5 L100 25 L120 20 L140 30 L160 20 L180 20 L200 10',
                'M0 20 L20 10 L40 15 L60 30 L80 25 L100 3 L120 30 L140 20 L160 30 L180 5 L200 10'
            ]
        });
        return (
            <View style={styles.container} >
                <Svg  height={40} width={'100%'} viewBox="0 0 200 80">
                    <AnimatedPath
                        strokeWidth={4}
                        stroke="#d9a114"
                        fill="none"
                        {...{ d }}
                    />
                </Svg>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animatedWrapper: {
        height: 40,
        width: 60,
        overflow: 'hidden',
    }
});
export default LineChart;
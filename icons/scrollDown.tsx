import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface scrollDownIcon {
    width?: Number,
    height?: Number,
    color?: String,
};

const ScrollDownIcon: FC<scrollDownIcon> = ({ width, color, height }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path d="M1 1l12 12L25 1" stroke={color || "#000000"} strokeWidth={2} />
    </Svg>
);

export default ScrollDownIcon;

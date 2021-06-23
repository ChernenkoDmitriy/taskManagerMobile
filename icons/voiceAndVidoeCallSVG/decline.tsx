import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface DeclineProps {
    width?: number,
    height?: number,
    color?: string,
}

const Decline: FC<DeclineProps> = ({ width, height, color }) => (
    <Svg width={width || 34} height={height || 12} viewBox="0 0 34 12">
        <Path d="M.714 8.454V10.9c0 .643.589 1.125 1.22.999l6.582-1.317a.958.958 0 0 0 .77-.939v-2.03c0-.635.37-1.211.947-1.476a16.24 16.24 0 0 1 13.534 0c.577.265.947.841.947 1.476v2.03c0 .457.323.85.77.94l6.588 1.317a1.015 1.015 0 0 0 1.214-.995V8.502a6.626 6.626 0 0 0-4.194-6.158 33.07 33.07 0 0 0-24.18-.04 6.605 6.605 0 0 0-4.198 6.15z" fill={color || "#fff"} />
    </Svg>
);

export default Decline;
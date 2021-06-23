import React, { FC } from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface AcceptCallProps {
    width?: number,
    height?: number,
    color?: string,
};

const AcceptCall: FC<AcceptCallProps> = ({ width, height, color }) => (
    <Svg width={width || 64} height={height || 62} viewBox="0 0 64 62">
        <Circle cx="33" cy="31" r="31" fill="#1BC17B" />
        <Path d="M47 22L31 38 21 28" stroke="#fff" strokeWidth="4" />
    </Svg>
);

export default AcceptCall;

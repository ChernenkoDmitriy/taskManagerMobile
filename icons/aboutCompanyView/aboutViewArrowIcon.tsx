import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const AboutViewArrowIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 14} height={height || 24} viewBox="0 0 14 24" fill="none">
            <Path d="M2 2L12 12L2 22" stroke={color || "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
};
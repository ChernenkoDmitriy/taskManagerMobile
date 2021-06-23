import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowIosLeft: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 8} height={height || 14} viewBox="0 0 8 14" fill="none" >
            <Path d="M7 1l-6 6 6 6" stroke={color || "#000"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
};
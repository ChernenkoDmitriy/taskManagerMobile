import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const RightArrowIcon: FC<{ width?: number, height?: number, color?: string, strokeWidth?: number }> = ({ width, height, color, strokeWidth }) => {
    return (
        <Svg width={width || 8} height={height || 14} viewBox="0 0 8 14" fill="none" >
            <Path
                d="M1 1l6 6-6 6"
                stroke={color || "#000"}
                strokeWidth={strokeWidth || 1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
};
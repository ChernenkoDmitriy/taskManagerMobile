import React, { FC } from "react";
import Svg, { Line } from "react-native-svg";

export const StatusCancelledIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none">
            <Line x1="18.4531" y1="7.57445" x2="7.84652" y2="18.181" stroke={color || "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Line x1="18.1521" y1="18.1816" x2="7.54551" y2="7.57504" stroke={color || "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
};
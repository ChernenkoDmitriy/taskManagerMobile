import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const StatusCompletedIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 16} height={height || 13} viewBox="0 0 16 13" fill="none">
            <Path d="M2 7.66887L6.8 11L14 2" stroke={color || "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
};
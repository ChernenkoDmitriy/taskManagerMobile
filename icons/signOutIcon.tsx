import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const SignOutIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24" fill="none">
            <Path d="M15 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H15" stroke={color || "#9FA5B4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M10 17L15 12L10 7" stroke={color || "#9FA5B4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path fill-rule="evenodd" clipRule="evenodd" d="M15 12H3H15Z" fill={color || "#9FA5B4"}/>
            <Path d="M15 12H3" stroke={color || "#9FA5B4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
};
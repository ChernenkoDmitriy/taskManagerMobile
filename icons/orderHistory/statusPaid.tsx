import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const StatusPaidIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 20} height={height || 15} viewBox="0 0 20 15" fill="none" >
            <Path d="M17.25 1H2.625C1.72754 1 1 1.72754 1 2.625V12.375C1 13.2725 1.72754 14 2.625 14H17.25C18.1475 14 18.875 13.2725 18.875 12.375V2.625C18.875 1.72754 18.1475 1 17.25 1Z" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M1 5.875H18.875" stroke={color || "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
};
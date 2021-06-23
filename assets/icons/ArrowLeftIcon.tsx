import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowLeftIcon: FC<{ width?: number, height?: number, color?: string, }> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24"  >
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" fill={color || '#000'} />
    </Svg>
);

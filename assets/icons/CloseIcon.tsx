import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
    width?: number,
    height?: number,
    color?: string,
}

export const CloseIcon: FC<Props> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path fill={color || '#000'} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Svg>
);

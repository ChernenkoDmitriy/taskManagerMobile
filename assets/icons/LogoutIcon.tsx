import React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    width?: number;
    height?: number;
    color?: string;
};

export const LogoutIcon = ({ width, height, color }: Props) => (
    <Svg viewBox="0 0 24 24" width={width || 24} height={height || 24}  >
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" fill={color || '#000000'} />
    </Svg>
);

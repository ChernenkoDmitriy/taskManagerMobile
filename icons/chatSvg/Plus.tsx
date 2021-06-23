import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface PlusProps {
    width?: string
    height?: string
    color?: string
}

const Plus: FC<PlusProps> = ({ width, height, color }) => (
    <Svg width={width || 17} height={height || 16} viewBox="0 0 17 16">
        <Path d="M8.5 0v16M.5 8h16" stroke="#1BC17B" strokeWidth="2" fill={color || '#FFFFFF'} />
    </Svg>
);

export default Plus;

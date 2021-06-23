import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface DowloadIconProps {
    width?: number,
    height?: number,
    color?: string,
}

const DowloadIcon: FC<DowloadIconProps> = ({ width, height, color }) => (
    <Svg width={width || 433.5} height={height || 433.5} viewBox="0 0 433.5 433.5">
        <Path d="M395.25 153h-102V0h-153v153h-102l178.5 178.5L395.25 153zm-357 229.5v51h357v-51h-357z" fill={color || '#000000'} />
    </Svg>
);

export default DowloadIcon;

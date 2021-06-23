import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface PlayProps {
    width?: string
    height?: string
    color?: string
}

const Play: FC<PlayProps> = ({ width, height, color }) => (
    <Svg width={width || 14} height={height || 18} viewBox="0 0 14 18">
        <Path d="M12.691 8.159a1 1 0 0 1 0 1.682L1.541 17.01A1 1 0 0 1 0 16.17V1.831A1 1 0 0 1 1.54.99L12.692 8.16z" fill={color || "#5C616D"} />
    </Svg>
);

export default Play;

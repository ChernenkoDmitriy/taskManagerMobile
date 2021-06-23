import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface ArrowBackIconProps {
    width?: number,
    height?: number,
    color?: string,
}

const ArrowBackIcon: FC<ArrowBackIconProps> = ({ width, height, color }) => (
    <Svg width={width || 19} height={height || 12} viewBox="0 0 19 12">
        <Path d="M18.162 5H3.865l3.612-3.59L6.054 0 0 6l6.054 6 1.423-1.41L3.864 7h14.298V5z" fill={color || '#000000'} />
    </Svg>
);

export default ArrowBackIcon;

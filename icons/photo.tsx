import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface PhotoIconProps {
    width?: number,
    height?: number,
    color?: string,
}

const PhotoIcon: FC<PhotoIconProps> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path fillRule="evenodd" clipRule="evenodd" d="M6 6l2-3h8l2 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3zm11 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill={color || "#fff"} />
    </Svg>
);

export default PhotoIcon;

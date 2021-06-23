import React, { FC } from "react";
import Svg, { Path, G } from "react-native-svg";

interface MainIconProps {
    color?: string,
    height?: string,
    width?: string,
};


export const CatalogIcon: FC<MainIconProps> = ({ width, height, color }) => (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none" >
        <G
            opacity={0.8}
            stroke={color || "#949AA5"}
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M12.333 28H5a1 1 0 01-1-1v-7.333a1 1 0 011-1h7.333a1 1 0 011 1V27a1 1 0 01-1 1zM27 28h-7.333a1 1 0 01-1-1v-7.333a1 1 0 011-1H27a1 1 0 011 1V27a1 1 0 01-1 1zM27 13.332h-7.333a1 1 0 01-1-1V4.999a1 1 0 011-1H27a1 1 0 011 1v7.333a1 1 0 01-1 1zM12.333 13.332H5a1 1 0 01-1-1V4.999a1 1 0 011-1h7.333a1 1 0 011 1v7.333a1 1 0 01-1 1z" />
        </G>
    </Svg>
);
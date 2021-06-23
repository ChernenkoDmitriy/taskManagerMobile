import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface CopyIconProps {
    width?: number,
    height?: number,
    color?: string,
}

const CopyIcon: FC<CopyIconProps> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M5 6a1 1 0 0 1 1-1h10V3H6a3 3 0 0 0-3 3v10h2V6zm4 1a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H9zm0 2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9z" fill={color || "#2FC265"} />
    </Svg>
);

export default CopyIcon;

import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface TrashIconProps {
    width?: number,
    height?: number,
    color?: string,
};

const TrashIcon: FC<TrashIconProps> = ({ width, height, color }) => (
    <Svg width={width || 34} height={height || 34} viewBox="0 0 34 34">
        <Path fillRule="evenodd" clipRule="evenodd" d="M14 8a2 2 0 0 0-2 2v1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2v-1a2 2 0 0 0-2-2h-6zm6 3v-1h-6v1h6zm4 6H10l1.84 9.196a1 1 0 0 0 .98.804h8.36a1 1 0 0 0 .98-.804L24 17z" fill={color || "#fff"} />
    </Svg>
);

export default TrashIcon;

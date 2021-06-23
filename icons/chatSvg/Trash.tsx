import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface TrashProps {
    width?: string
    height?: string
    color?: string
}

const Trash: FC<TrashProps> = ({ width, height, color }) => (
    <Svg width={width || 16} height={height || 19} viewBox="0 0 16 19">
        <Path fillRule="evenodd" clipRule="evenodd" d="M5 0a2 2 0 0 0-2 2v1H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V2a2 2 0 0 0-2-2H5zm6 3V2H5v1h6zm4 6H1l.82 8.199A2 2 0 0 0 3.81 19h8.38a2 2 0 0 0 1.99-1.801L15 9z" fill={color || "#1BC17B"} />
    </Svg>
);

export default Trash;

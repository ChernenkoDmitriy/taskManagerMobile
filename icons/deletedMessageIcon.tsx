import React, { FC } from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface DeletedMessageIconProps {
    width?: number,
    height?: number,
}

const DeletedMessageIcon: FC<DeletedMessageIconProps> = ({ width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill='none'>
        <Circle cx="12" cy="12" r="5.25" stroke="#747C8A" stroke-width="1.5"/>
        <Path d="M8 8L16 16" stroke="#747C8A" stroke-width="1.5"/>
    </Svg>
);

export default DeletedMessageIcon;
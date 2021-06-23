import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface DeleteIconProps {
    width?: number,
    height?: number,
    color?: string,
}

const DeleteIcon: FC<DeleteIconProps> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path fillRule="evenodd" clipRule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm2.293-4.293L12 13.414l-2.293 2.293-1.414-1.414L10.586 12 8.293 9.707l1.414-1.414L12 10.586l2.293-2.293 1.414 1.414L13.414 12l2.293 2.293-1.414 1.414z" fill={color || "#C4C4C4"} />
    </Svg>
);

export default DeleteIcon;

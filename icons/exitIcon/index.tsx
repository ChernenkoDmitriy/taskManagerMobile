import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number,
    height?: number,
    color?: string,
};

export const ExitIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg height={height || 24} width={width || 24} viewBox="0 0 32 32">
        <Path
            fill={color || '#000000'}
            d="M27 3v26a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h2v1h18V4H7v3H5V3a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1ZM10.71 20.29 7.41 17H18v-2H7.41l3.3-3.29-1.42-1.42-5 5a1 1 0 0 0 0 1.42l5 5Z"
        />
    </Svg>
);

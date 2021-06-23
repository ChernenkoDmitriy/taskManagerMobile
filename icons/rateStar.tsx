import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const RateStarIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 20} height={height || 19} viewBox="0 0 20 19" fill="none">
            <Path
                d="M9.871 1l3.176 5.45 5.824 1.043-3.985 4.014.547 6.493-5.562-3.5L4.31 18l.547-6.493L.871 7.493 6.695 6.45 9.871 1z"
                fill="#FFCD3B"
                stroke="#FFCD3B"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
};
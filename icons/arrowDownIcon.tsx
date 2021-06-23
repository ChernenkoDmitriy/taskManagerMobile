import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowDonwIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 20} height={height || 13} viewBox="0 0 20 13" fill="none" >
            <Path
                d="M18 2l-8 9-8-9"
                stroke={color || "#4C4C4C"}
                strokeOpacity={0.5}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
};
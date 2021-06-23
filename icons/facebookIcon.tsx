import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const FacebookIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => (
    <Svg
        width={width || 24}
        height={height || 25}
        viewBox="0 0 24 25"
        fill="none"
    >
        <Path
            d="M18 2.5h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3v-4z"
            fill={color || "#4092FF"}
        />
    </Svg>
)

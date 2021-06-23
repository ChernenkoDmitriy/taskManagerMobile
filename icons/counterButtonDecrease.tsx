import React, { FC } from "react"
import Svg, { Rect, Path } from "react-native-svg"

export const CounterButtonDecreaseIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 40} height={height || 40} viewBox="0 0 40 40" fill="none" >
            <Rect
                x={0.75}
                y={0.75}
                width={38.5}
                height={38.5}
                rx={3.25}
                fill="#fff"
                fillOpacity={0.8}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.54 19.615c0-.637.494-1.154 1.105-1.154h15.48c.611 0 1.106.517 1.106 1.154 0 .637-.495 1.154-1.105 1.154H12.645c-.61 0-1.106-.517-1.106-1.154z"
                fill={color || "#9FA5B4"}
            />
            <Rect
                x={0.75}
                y={0.75}
                width={38.5}
                height={38.5}
                rx={3.25}
                stroke={color || "#9FA5B4"}
                strokeWidth={1.5}
            />
        </Svg>
    )
};
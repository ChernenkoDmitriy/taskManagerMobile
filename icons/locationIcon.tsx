import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const LocationIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 30} height={height || 30} viewBox="0 0 30 30" fill="none" >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm5.17-17.708c0 2.877-2.918 9.792-5.293 9.792-2.374 0-5.291-6.915-5.291-9.792 0-2.876 2.415-5.208 5.291-5.208 2.877 0 5.292 2.332 5.292 5.208zm-2.67.208a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                fill={color || "#DCE1E2"}
            />
        </Svg>
    )
};
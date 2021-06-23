import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const EyeIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => (
    <Svg
        width={width || 24}
        height={height || 24}
        viewBox="0 0 24 25"
        fill="none"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 12c1.73-4.39 6-7.5 11-7.5s9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12zm19.82 0A9.77 9.77 0 0012 6.5 9.77 9.77 0 003.18 12 9.77 9.77 0 0012 17.5a9.77 9.77 0 008.82-5.5zM12 9.5a2.5 2.5 0 010 5 2.5 2.5 0 010-5zM7.5 12c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5z"
            fill={color || "#999CAD"}
        />
    </Svg>
)

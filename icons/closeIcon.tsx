import React, { FC } from "react"
import Svg, { Rect, Path } from "react-native-svg"

export const CloseIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24" fill="none">
            <Rect
                x={23.25}
                y={0.75}
                width={22.5}
                height={22.5}
                rx={3.25}
                transform="rotate(90 23.25 .75)"
                fill="#fff"
                fillOpacity={0.8}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.984 8.474c.27.27.28.7.02.959L9.436 16c-.259.26-.688.25-.959-.02-.27-.27-.279-.7-.02-.959l6.568-6.567c.26-.26.688-.25.959.02z"
                fill="#97ADB6"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.477 8.474c.27-.27.7-.28.959-.02l6.568 6.567c.259.26.25.689-.02.96-.27.27-.7.279-.96.02L8.458 9.432c-.26-.26-.25-.689.02-.96z"
                fill="#97ADB6"
            />
            <Rect
                x={23.25}
                y={0.75}
                width={22.5}
                height={22.5}
                rx={3.25}
                transform="rotate(90 23.25 .75)"
                stroke="#97ADB6"
                strokeWidth={1.5}
            />
        </Svg>
    )
};
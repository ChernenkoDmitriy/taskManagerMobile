import React, { FC } from "react"
import Svg, { Circle, Path, ClipPath } from "react-native-svg"

export const TimePickerIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
            <Circle cx={16} cy={16} r={16} fill={color || "#BFD24E"} />
            <Path
                d="M16 7.465a8.533 8.533 0 108.533 8.533A8.542 8.542 0 0016 7.465zm.61 8.533a.61.61 0 01-.61.61h-4.876a.61.61 0 010-1.22h4.267v-4.266a.61.61 0 111.219 0v4.876z"
                fill="#fff"
            />
            <ClipPath id="prefix__clip0">
                <Path
                    fill="#fff"
                    transform="translate(7.467 7.465)"
                    d="M0 0h17.067v17.067H0z"
                />
            </ClipPath>
        </Svg>
    )
};
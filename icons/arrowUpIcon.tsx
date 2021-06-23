import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const ArrowUpIcon: FC<{ width?: number, height?: number}> = ({ width, height }) => (
    <Svg width={width || 18} height={height || 12} viewBox="0 0 14 8" fill="none">
      <Path d="M7 0l6.928 7.5H.072L7 0z" fill="#0F264B" />
    </Svg>
)
import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const StrokeDownIcon: FC<{ width?: number, height?: number, color?: string }> = ({ color, height, width }) => (
  <Svg width={width || 15} height={height || 10} viewBox="0 0 10 5" fill="none" >
    <Path d="M1.845 1L5 4.279 8.155 1h-6.31z" stroke={color || "#fff"} fill={color || "#fff"} />
  </Svg>
)

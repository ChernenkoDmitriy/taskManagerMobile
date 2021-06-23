import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const StrokeUpIcon: FC<{ width?: number, height?: number, color?: string }> = () => (
  <Svg
    width={15}
    height={10}
    viewBox="0 0 10 5"
    fill="none"
  >
    <Path d="M8.155 4L5 .721 1.845 4h6.31z" stroke="#fff" />
  </Svg>
);
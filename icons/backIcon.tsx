import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const BackIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
    <Svg
      width={width || "18"}
      height={height || "16"}
      fill="none"
      viewBox="0 0 18 16"
    >
      <Path
        stroke={color || "#0F264B"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 1L1 8l7 7M1 8h16"
      ></Path>
    </Svg>
  );
}

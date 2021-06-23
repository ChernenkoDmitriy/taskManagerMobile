import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const DotsIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
    <Svg
      width={width || "20"}
      height={height || "4"}
      fill="none"
      viewBox="0 0 20 4"
    >
      <Path
        stroke={color || "#0F264B"}
        strokeWidth="2"
        d="M2 3a1 1 0 100-2 1 1 0 000 2zM10 3a1 1 0 100-2 1 1 0 000 2zM18 3a1 1 0 100-2 1 1 0 000 2z"
      ></Path>
    </Svg>
  );
}

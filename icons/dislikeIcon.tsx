import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const DislikeIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => (
  <Svg
    width={width || "19"}
    height={height || "18"}
    fill="none"
    viewBox="0 0 19 18"
  >
    <Path
      fill={color || "#0F264B"}
      d="M17.1 0h-.95v12.316h.95c.504 0 .987-.2 1.343-.555.357-.355.557-.837.557-1.34V1.895c0-.503-.2-.985-.556-1.34A1.903 1.903 0 0017.1 0zM1.9 12.316h6.65l-1.066 3.19a1.89 1.89 0 00.937 2.286c.268.136.564.208.865.208H9.5l4.75-5.152V0H3.8L.06 8.194 0 8.47v1.95c0 .503.2.985.556 1.34.357.355.84.555 1.344.555z"
    ></Path>
  </Svg>
);
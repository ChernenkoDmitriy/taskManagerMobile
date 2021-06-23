import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const LikeIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => (
    <Svg
      width={width || "19"}
      height={height || "18"}
      fill="none"
      viewBox="0 0 19 18"
    >
      <Path
        fill={color || "#3C7BEA"}
        d="M1.9 18h.95V5.684H1.9c-.504 0-.987.2-1.344.555A1.892 1.892 0 000 7.58v8.526c0 .503.2.985.556 1.34.357.355.84.555 1.344.555zM17.1 5.684h-6.65l1.066-3.19a1.89 1.89 0 00-.937-2.286A1.904 1.904 0 009.714 0H9.5L4.75 5.152V18H15.2l3.716-8.144.084-.382V7.579c0-.503-.2-.984-.556-1.34a1.903 1.903 0 00-1.344-.555z"
      ></Path>
    </Svg>
  );
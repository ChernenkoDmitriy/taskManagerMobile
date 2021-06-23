import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const PostsIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {

  return (
    <Svg
      width={width || "76"}
      height={height || "37"}
      viewBox="0 0 76 37"
      fill="none">
      <Path d="M41.8749 6.89453H30.4166C29.2708 6.89453 28.3333 8.05703 28.3333 9.47786V27.5612C28.3333 28.982 29.2708 30.1445 30.4166 30.1445H44.9999C46.1458 30.1445 47.0833 28.982 47.0833 27.5612V13.3529L41.8749 6.89453ZM44.9999 27.5612H30.4166V9.47786H40.8333V14.6445H44.9999V27.5612ZM32.4999 24.9779H42.9166V22.3945H32.4999V24.9779ZM37.7083 12.0612H32.4999V14.6445H37.7083V12.0612ZM32.4999 19.8112H42.9166V17.2279H32.4999V19.8112Z"
        fill={color || "#979797"} />
    </Svg>
  );

}
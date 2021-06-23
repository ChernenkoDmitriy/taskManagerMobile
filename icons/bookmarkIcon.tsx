import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

export const BookmarkIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
    <Svg
      width={width || "12"}
      height={height || "18"}
      fill="none"
      viewBox="0 0 12 20"
    >
      <Path
        stroke="#0F264B"
        fill={color || '#0F264B'}
        strokeWidth="2"
        d="M6.516 15.533L6 15.223l-.516.31L1 18.231V1.43c0-.165.056-.295.117-.367a.214.214 0 01.066-.056A.064.064 0 011.2 1h9.604l.013.006a.215.215 0 01.066.056c.06.072.117.202.117.367V18.23l-4.484-2.698z"
      ></Path>
    </Svg>
    )
};
import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowIcon: FC<{ width?: number, height?: number, color?: string }> = () => {
    return (
      <Svg width={8} height={14} viewBox="0 0 8 14" fill="none">
        <Path
          d="M1 1l6 6-6 6"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
};
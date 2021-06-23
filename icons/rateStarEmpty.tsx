import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const RateStarEmptyIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 21} height={height || 21} viewBox="0 0 21 21" fill="none">
        <Path
          d="M10.414 1l3.383 5.954L20 8.094l-4.244 4.385.583 7.094-5.925-3.824-5.924 3.824.583-7.094L.828 8.094l6.203-1.14L10.414 1z"
          stroke="#FFCD3B"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
};
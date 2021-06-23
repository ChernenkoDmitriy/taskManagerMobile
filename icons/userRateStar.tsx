import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const UserRateStarIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
      <Svg width={width || 36} height={height || 36} viewBox="0 0 36 33" fill="none">
        <Path
          d="M18.476.845a.5.5 0 00-.951 0L13.82 12.247H1.832a.5.5 0 00-.294.904l9.699 7.047-3.705 11.4a.5.5 0 00.77.56L18 25.11l9.698 7.047a.5.5 0 00.77-.56l-3.705-11.4 9.699-7.047a.5.5 0 00-.294-.904H22.18L18.476.845z"
          fill={color || "white"}
          stroke="#9FA5B4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
};
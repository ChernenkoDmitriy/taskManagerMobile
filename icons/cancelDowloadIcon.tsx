import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface CancelDowloadIconProps {
  width?: number,
  height?: number,
  color?: string,
  colorBg?: string,
}

const CancelDowloadIcon: FC<CancelDowloadIconProps> = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path fill={color || '#000000'} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    <Path d="M0 0h24v24H0z" fill={"none"} />
  </Svg>
);

export default CancelDowloadIcon;
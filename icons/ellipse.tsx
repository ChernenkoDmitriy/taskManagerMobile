import React, { FC } from "react";
import Svg, { Circle } from "react-native-svg";

interface EllipseIconProps {
  width?: number,
  height?: number,
  color?: string,
}

const EllipseIcon: FC<EllipseIconProps> = ({ width, height, color }) => (
  <Svg width={width || 16} height={height || 16} viewBox="0 0 16 16">
    <Circle cx="8" cy="8" r="8" fill={color || "#1BC17B"} />
  </Svg>
);

export default EllipseIcon;
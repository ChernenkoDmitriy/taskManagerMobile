import React, { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface MagnifierProps {
  width?: number,
  height?: number,
  color?: string,
}

const Magnifier: FC<MagnifierProps> = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Circle cx="10" cy="10" r="5" stroke={color} strokeWidth="2" />
    <Path d="M13.5 13.5L19 19" stroke={color} strokeWidth="2" />
  </Svg>
);

export default Magnifier;

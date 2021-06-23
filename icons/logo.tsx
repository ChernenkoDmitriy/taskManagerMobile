import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface LogoProps {
  width?: number,
  height?: number,
  color?: string,
}
const Logo: FC<LogoProps> = ({ width, color, height }) => (
  <Svg width={width || 150} height={height || 150} viewBox="0 0 150 150">
    <Path d="M144.059 105.68l-10.54-46.305c0-2.6-2.1-4.7-4.69-4.7l-7.695-.705v48.19a5.181 5.181 0 0 1-5.185 5.175h-68.79v5.48c0 2.6 2.105 4.7 4.7 4.7h74.515l23.625 10.025-5.94-21.86z" fill={color || "#1BC17B"} />
    <Path d="M108.115 22.5L23.33 30.275a5.176 5.176 0 0 0-5.175 5.175L6.545 86.46 0 110.54l26.02-11.045h82.09a5.175 5.175 0 0 0 5.175-5.17v-66.65a5.171 5.171 0 0 0-5.17-5.175z" fill={color || "#1BC17B"} />
  </Svg>
);

export default Logo;

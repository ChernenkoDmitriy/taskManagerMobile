import React, { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface SendProps {
  width?: number
  height?: number
  color?: string
}

const Send: FC<SendProps> = ({ width, height, color }) => (
  <Svg width={width || 34} height={height || 34} viewBox="0 0 34 34">
    <Circle cx="17" cy="17" r="17" fill={color || "#1BC17B"} />
    <Path d="M23.447 17.894l1.79-.894-1.79-.894-12-6-1.789-.895.358 1.968.75 4.125.108.595.578.18 2.945.921-2.945.92-.578.181-.108.595-.75 4.125-.358 1.968 1.79-.895 12-6z" stroke="#fff" strokeWidth="1" />
  </Svg>
);

export default Send;

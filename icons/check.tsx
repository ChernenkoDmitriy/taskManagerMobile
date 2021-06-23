import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface TwoCheckMarkStatusMessageProps {
  width?: number,
  height?: number,
  color?: string,
}

const TwoCheckMarkStatusMessage: FC<TwoCheckMarkStatusMessageProps> = ({ width, height, color }) => (
  <Svg width={width || 20} height={height || 20} viewBox="0 0 20 20">
    <Path fillRule="evenodd" clipRule="evenodd" d="M12.213 13.21l7.536-7.5-1.411-1.417-6.83 6.798-.802-.798-1.411 1.418 1.507 1.5.706.702.705-.702zm-6.493 0l7.536-7.5-1.41-1.417-6.831 6.798-2.31-2.298-1.41 1.418 3.014 3 .706.702.705-.702z" fill={color || "#1BC17B"} />
  </Svg>
);

export default TwoCheckMarkStatusMessage;
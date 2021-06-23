import React, { FC } from "react";
import Svg, { Rect } from "react-native-svg";

interface PauseProps {
  width?: string
  height?: string
  color?: string
}

const Pause: FC<PauseProps> = ({ width, height, color }) => (
  <Svg width={width || 13} height={height || 16} viewBox="0 0 13 16">
    <Rect width="5" height="16" rx="1" fill={color || "#5C616D"} />
    <Rect x="8" width="5" height="16" rx="1" fill={color || "#5C616D"} />
  </Svg>
);

export default Pause;

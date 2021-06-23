import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

interface CrossProps {
  width?: number,
  height?: number,
  color?: string,
}

const Cross: FC<CrossProps> = ({ width, height, color }) => (
  <Svg width={width || 26} height={height || 26} viewBox="0 0 26 26">
    <G filter="url(#a)" stroke={color || "#fff"} strokeWidth="2">
      <Path d="M5 5l16 16M21 5L5 21" />
    </G>
    <Defs />
  </Svg>
);

export default Cross;

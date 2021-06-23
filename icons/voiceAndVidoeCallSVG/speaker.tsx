import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

interface SpeakerProps {
  width?: number,
  height?: number,
  color?: string,
}

const Speaker: FC<SpeakerProps> = ({ width, height, color }) => (
  <Svg width={width || 38} height={height || 34} viewBox="0 0 38 34">
    <G >
      <Path d="M4 19.083v-4.166c0-1.083.895-1.96 2-1.96h3.2l5.308-4.587C15.477 7.533 17 8.207 17 9.473v15.054c0 1.266-1.523 1.94-2.492 1.103L9.2 21.044H6c-1.105 0-2-.878-2-1.961z" fill={color || "#fff"} />
      <Path d="M20.95 21.95a7 7 0 0 0 0-9.9M24.485 25.485a12 12 0 0 0 0-16.97M28.02 29.02a16.998 16.998 0 0 0 0-24.041" stroke={color || "#fff"} strokeWidth="2" />
    </G>
    <Defs />
  </Svg>
);

export default Speaker;

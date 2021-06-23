import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

interface MuteProps {
  width?: number,
  height?: number,
  color?: string,
}

const Mute: FC<MuteProps> = ({ width, height, color }) => (
  <Svg width={width || 34} height={height || 35} viewBox="0 0 34 35">
    <G filter="url(#a)">
      <Path d="M12 30h10M17 25v4" stroke={color || "#fff"} strokeWidth="2" />
      <Path fillRule="evenodd" clipRule="evenodd" d="M24.82 19.698A8.03 8.03 0 0 0 25 18v-4h-2v3.879l1.82 1.82zM21 15.878V8a4 4 0 0 0-7.998-.12L21 15.88zm-8-3.757l7.608 7.608A4 4 0 0 1 13 18v-5.879zm9.077 9.078l1.441 1.44A8 8 0 0 1 9 18v-3.999h2v4a6 6 0 0 0 11.077 3.199z" fill={color || "#fff"} />
      <Path d="M5 5l24 24" stroke={color || "#fff"} strokeWidth="2" />
    </G>
    <Defs />
  </Svg>
);

export default Mute;

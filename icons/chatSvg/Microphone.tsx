import React, { FC } from "react";
import Svg, { Rect, Path } from "react-native-svg";

interface MicrophoneProps {
  width?: number,
  height?: number,
  color?: string,
}

const Microphone: FC<MicrophoneProps> = ({ width, height, color }) => (
  <Svg width={width || 14} height={height || 20} viewBox="0 0 14 20">
    <Rect x="4" y="1" width="6" height="11" rx="3" stroke="#fff" strokeWidth="2" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M0 7v2.5A6.5 6.5 0 0 0 6.5 16h1A6.5 6.5 0 0 0 14 9.5V7h-2v2.5A4.5 4.5 0 0 1 7.5 14h-1A4.5 4.5 0 0 1 2 9.5V7H0z" fill={color || "#fff"} />
    <Path d="M7 16v4" stroke="#fff" strokeWidth="2" />
  </Svg>
);

export default Microphone;

import React, { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface NewContactAvatarProps {
  width?: number,
  height?: number,
  color?: string,
  colorBg?: string,
}

const NewContactAvatar: FC<NewContactAvatarProps> = ({ width, height, color, colorBg }) => (
  <Svg width={width || 40} height={height || 40} viewBox="0 0 40 40">
    <Circle cx="20" cy="20" r="20" fill={colorBg || "#F7F8FA"} />
    <Path fillRule="evenodd" clipRule="evenodd" d="M19 20A10 10 0 0 0 9 30h2a7.999 7.999 0 0 1 13-6.245V21.34A10.007 10.007 0 0 0 19 20z" fill={color || "#1BC17B"} />
    <Circle cx="19" cy="13" r="5" stroke={color || "#1BC17B"} strokeWidth="2" />
    <Path d="M27 23v10M22 28h10" stroke={color || "#1BC17B"} strokeWidth="2" />
  </Svg>
);

export default NewContactAvatar;

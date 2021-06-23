import React, { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface AvatarDefaultIconProps {
  width?: number,
  height?: number,
  color?: string,
  colorBg?: string,
}

const AvatarDefaultIcon: FC<AvatarDefaultIconProps> = ({ width, height, color, colorBg }) => (
  <Svg width={width || 54} height={height || 54} viewBox="0 0 54 54">
    <Circle cx="27" cy="27" r="27" fill={colorBg || '#D8DBE0'} />
    <Path d="M37 41h2c0-6.627-5.373-12-12-12-6.628 0-12 5.373-12 12h2c0-5.515 4.485-10 10-10s10 4.485 10 10zM27 27c3.865 0 7-3.135 7-7s-3.135-7-7-7-7 3.135-7 7 3.135 7 7 7zm0-12.125c2.825 0 5.125 2.3 5.125 5.125s-2.3 5.125-5.125 5.125A5.132 5.132 0 0 1 21.875 20c0-2.825 2.3-5.125 5.125-5.125z" fill={color ||"#fff"} />
  </Svg>
);

export default AvatarDefaultIcon;
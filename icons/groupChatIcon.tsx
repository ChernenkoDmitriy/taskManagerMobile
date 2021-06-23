import React, { FC } from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface GroupChatIconProps {
  width?: number,
  height?: number,
  color?: string,
  colorBg?: string,
}

const GroupChatIcon: FC<GroupChatIconProps> = ({ width, height, color, colorBg }) => (
  <Svg width={width || 54} height={height || 54} viewBox="0 0 40 40"><Circle cx="20" cy="20" r="20" fill={colorBg || "#F7F8FA"}></Circle>
    <Path d="M27 29a7.001 7.001 0 0 0-11.95-4.95A6.998 6.998 0 0 0 13 29" stroke={color || "#1BC17B"} strokeWidth="2" />
    <Circle cx="20" cy="15" r="4" stroke={color || "#1BC17B"} strokeWidth="2"></Circle>
    <Circle cx="29.5" cy="18.5" r="2.5" stroke={color || "#1BC17B"} strokeWidth="2"></Circle>
    <Circle r="2.5" transform="matrix(-1 0 0 1 10.5 18.5)" stroke={color || "#1BC17B"} strokeWidth="2"></Circle>
    <Path fillRule="evenodd" clipRule="evenodd" d="M29.167 25.003A3.999 3.999 0 0 1 33 29h2a6 6 0 0 0-6.944-5.925 10.006 10.006 0 0 1 1.11 1.928zM11.944 23.075A5.999 5.999 0 0 0 5 29h2a4 4 0 0 1 3.833-3.997c.3-.687.674-1.333 1.111-1.928z" fill={color || "#1BC17B"} />
  </Svg>
);

export default GroupChatIcon;

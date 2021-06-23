import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface SendProps {
  color?: string,
  style?: any,
};

export const MyTooltip: FC<SendProps> = ({ color, style }) => (
  <Svg style={style} width={50} height={50} viewBox="0 0 400 400">
    <Path d="M 253 11 C 299 104 324 115 405 116 C 339 183 306 200 250 200 Z" fill={color} />
  </Svg>
);

export const SenderTooltip: FC<SendProps> = ({ color, style }) => (
  <Svg style={style} width={50} height={50} viewBox="0 0 400 400">
    <Path d="M 253 11 C 207 104 182 115 101 118 C 167 183 200 200 250 200 Z" fill={color} />
  </Svg>
);
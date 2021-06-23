import React, { FC } from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface DeclineCallProps {
  width?: number,
  height?: number,
  color?: string,
};

const DeclineCall: FC<DeclineCallProps> = ({ width, height, color }) => (
  <Svg width={width || 62} height={height || 62} viewBox="0 0 62 62">
    <Circle cx="31" cy="31" r="31" fill="#EB5757" />
    <Path d="M20 20l22 22M42 20L20 42" stroke="#fff" strokeWidth="4" />
  </Svg>
);

export default DeclineCall;

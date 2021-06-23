import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackSvg: FC<{ width?: number, height?: number }> = ({ width, height }) => {
  return (
    <Svg width={width || 16} height={height || 26} viewBox="0 0 16 26" fill="none">
      <Path
        d="M14 24L2 13 14 2"
        stroke="#4C4C4C"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

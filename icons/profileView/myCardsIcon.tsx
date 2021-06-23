import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const MyCardsIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
  return (
    <Svg width={width || 24} height={height || 18} viewBox="0 0 24 18" fill="none" >
      <Path d="M21 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H21C22.1046 17 23 16.1046 23 15V3C23 1.89543 22.1046 1 21 1Z" stroke={color || "#9FA5B4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M1 7H23" stroke={color || "#9FA5B4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
};

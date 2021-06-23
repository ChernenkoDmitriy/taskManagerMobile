import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const MyAddressesIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
  return (
    <Svg width={width || 20} height={height || 22} viewBox="0 0 20 22" fill="none" >
      <Path d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke={color || "#9FA5B4"}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M7 21V11H13V21" stroke={color || "#9FA5B4"}  strokeWidth="2" stroke-Linecap="round" strokeLinejoin="round"/>
    </Svg>
  )
};

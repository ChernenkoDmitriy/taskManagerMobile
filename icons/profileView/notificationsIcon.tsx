import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const NotificationsIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
  return (
    <Svg width={width || 20} height={height || 22}  viewBox="0 0 20 22" fill="none">
      <Path d="M19 16H18V8.00001C18 3.58901 14.411 0 10 0C5.58903 0 2.00002 3.58901 2.00002 8.00001V16H1.00001C0.447004 16 0 16.447 0 17C0 17.553 0.447004 18 1.00001 18H2.00002H6.00003C6.00003 20.206 7.79402 22 10 22C12.206 22 14 20.206 14 18H18H19C19.5531 18 20.0001 17.553 20.0001 17C20.0001 16.447 19.553 16 19 16ZM10 20C8.89702 20 8.00005 19.103 8.00005 18H12.0001C12 19.103 11.103 20 10 20ZM16 16H14H6.00003H4.00005V8.00001C4.00005 4.69103 6.69105 2.00002 10 2.00002C13.309 2.00002 16 4.69103 16 8.00001V16Z" fill={color || "#9FA5B4"}/>
    </Svg>
  )
};

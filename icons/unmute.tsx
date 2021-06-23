import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface UnMuteIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const UnMuteIcon: FC<UnMuteIconProps> = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 22} viewBox="0 0 40 36" fill="none">
      <Path d="M4 20.427v-4.854c0-1.072.895-1.942 2-1.942h4l6.54-5.29C17.517 7.55 19 8.223 19 9.458v17.082c0 1.235-1.483 1.91-2.46 1.119L10 22.369H6c-1.105 0-2-.87-2-1.942z" fill="#fff"/>
      <Path d="M22.657 23.657a8 8 0 000-11.314M26.192 27.192a13.001 13.001 0 000-18.384" stroke="#fff" strokeWidth={2} />
      <Path d="M29.727 30.728a17.997 17.997 0 003.902-19.616 17.998 17.998 0 00-3.901-5.84" stroke="#fff" strokeWidth={2} />
  </Svg>
);

export default UnMuteIcon;

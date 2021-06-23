import React, { FC } from 'react';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const UkraineIcon: FC<{ width?: number, height?: number, color?: string, selected?: boolean }> = ({ width, height, color, selected }) => {
  return (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
    <G clipPath="url(#prefix__clip0)">
      <Path
        d="M21.94 16H32c0-8.837-7.163-16-16-16 4.418 0 5.94 8 5.94 16z"
        fill="#3DAAE0"
      />
      <Path
        d="M0 16h22.627c0-8-2.209-16-6.627-16C7.163 0 0 7.163 0 16z"
        fill="#44C1EF"
      />
      <Path
        d="M21.603 15.998c0 8-1.184 16-5.603 16 8.837 0 16-7.164 16-16H21.603z"
        fill="#E8BD1F"
      />
      <Path
        d="M22.627 15.998H0c0 8.836 7.163 16 16 16 4.418 0 6.627-8 6.627-16z"
        fill="#FDCE0C"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
};

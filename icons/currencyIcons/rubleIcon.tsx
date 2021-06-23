import React, { FC } from 'react';
import Svg, { Circle, Path } from "react-native-svg"

export const RubleIcon: FC<{ width?: number, height?: number, color?: string, selected?: boolean }> = ({ width, height, color, selected }) => {
  return (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
      <Circle cx={16} cy={16} r={16} fill={selected ? "#BFD24E" : "#dce1e2"} />
      <Path
        d="M16.91 16.303c2.84 0 5.15-2.31 5.15-5.152a5.157 5.157 0 00-5.184-5.15h-4.208-.001a.91.91 0 00-.91.909V18.12h-.909a.91.91 0 000 1.818h.91v5.152a.91.91 0 001.818 0v-5.152h3.333a.91.91 0 100-1.818h-3.333v-1.818h3.333zm0-8.484h.029a3.337 3.337 0 013.303 3.333 3.337 3.337 0 01-3.333 3.333h-3.333V7.819h3.333z"
        fill="#fff"
      />
    </Svg>
  )
};

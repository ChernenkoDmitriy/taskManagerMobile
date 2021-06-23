import React, { FC } from 'react';
import Svg, { Circle, Path } from "react-native-svg"

export const EuroIcon: FC<{ width?: number, height?: number, color?: string, selected?: boolean }> = ({ width, height, color, selected }) => {
  return (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
      <Circle cx={16} cy={16} r={16} fill={selected ? "#BFD24E" : "#dce1e2"} />
      <Svg width={width || 32} height={height || 32} viewBox="-5 -5 32 32" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.138.64h-.01C10.99-1.288 5.249 1.284 3.27 6.415c-.094.243-.18.491-.254.743H1.022C.459 7.158 0 7.617 0 8.18s.459 1.022 1.022 1.022h1.615c-.05.65-.038 1.301.035 1.949h-1.65C.459 11.15 0 11.61 0 12.173s.459 1.022 1.022 1.022H3.13c1.722 5.098 7.192 7.94 12.374 6.375l.005-.001c.23-.073.46-.152.687-.237l.005-.002c.518-.203.787-.793.58-1.321a1.023 1.023 0 00-1.32-.581c-3.984 1.534-8.446-.353-10.149-4.228h8.04c.564 0 1.023-.458 1.023-1.021s-.46-1.022-1.022-1.022H4.73a8.143 8.143 0 01-.042-1.95h9.603c.563 0 1.022-.458 1.022-1.021s-.459-1.022-1.022-1.022H5.176a7.97 7.97 0 019.73-4.774c.189.057.377.118.562.189A1.026 1.026 0 0016.791 2l.002-.004a1.026 1.026 0 00-.576-1.325L16.137.64z"
          fill="#fff"
        />
      </Svg>
    </Svg>
  )
};

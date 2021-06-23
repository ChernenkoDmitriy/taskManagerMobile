import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";


interface MuteIconProps {
  width?: number,
  height?: number,
  color?: string,
};

const MuteIcon: FC<MuteIconProps> = ({ width, height, color }) => (
  <Svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <Path d="M12 12L7.5 8h-1v6.5L12 17v-5z" fill={color || "#fff"} />
    <Path fill={color || "#fff"} d="M2 8h5v6H2z" />
    <Path d="M6.417 7.333H3.833a2 2 0 0 0-2 2v3.334a2 2 0 0 0 2 2h2.584l5.5 2.291v-5.041M6.417 14.208V7.333M1.833 1.833l18.334 18.334" stroke={color || "#fff"} strokeWidth="1.5" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M12.667 9.079V2.912l-1.086.542-3.026 1.513 1.118 1.118 1.494-.746v2.24l1.5 1.5zm-1.5 1.171v.292h.291l-.291-.292zM16.757 13.169c.23-.877.36-1.902.32-2.942-.05-1.382-.402-2.872-1.284-4.098l-1.08 1.08c.563.88.825 1.965.866 3.074.02.56-.016 1.109-.092 1.616l1.27 1.27zM19.68 16.093C21.29 11.6 21.109 7.09 18.33 3.59l-1.069 1.07c2.135 2.794 2.45 6.404 1.237 10.249l1.183 1.183zm-1.914.756a20.57 20.57 0 0 1-.115.257l.682.31-.567-.567z" fill={color || "#fff"} />
  </Svg>
);

export default MuteIcon;

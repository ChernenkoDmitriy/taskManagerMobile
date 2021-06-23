import React, { FC } from "react";
import Svg, { Circle } from "react-native-svg";

interface MoreIconProps {
  width?: number,
  height?: number,
  color?: string,
  horizontal?: boolean
}

const MoreIcon: FC<MoreIconProps> = ({ width, height, color, horizontal = false }) => (
 <> 
    {horizontal
      ? <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Circle cx="6" cy="12" r="2" transform="rotate(-90 6 12)" fill={color || "#1BC17B"} />
        <Circle cx="12" cy="12" r="2" transform="rotate(-90 12 12)" fill={color || "#1BC17B"} />
        <Circle cx="18" cy="12" r="2" transform="rotate(-90 18 12)" fill={color || "#1BC17B"} />
      </Svg>
      : <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Circle cx="12" cy="6" r="2" fill={color || "#1BC17B"} />
        <Circle cx="12" cy="12" r="2" fill={color || "#1BC17B"} />
        <Circle cx="12" cy="18" r="2" fill={color || "#1BC17B"} />
      </Svg>
    }
  </>
);

export default MoreIcon;

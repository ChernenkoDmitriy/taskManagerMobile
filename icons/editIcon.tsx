import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface EditIconProps {
  width?: number,
  height?: number,
  color?: string,
}

const EditIcon: FC<EditIconProps> = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 25} viewBox="0 0 24 25"><Path d="M15 5.053H6a2 2 0 0 0-2 2V19.22a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9.116" stroke="#1BC17B" strokeWidth="2"></Path>
    <Path fillRule="evenodd" clipRule="evenodd" d="M20.728 3.032L19.314 4.46l1.414 1.429 1.414-1.43-1.414-1.428zm-2.121 2.143l-9.9 10.004v1.43h1.414l9.9-10.004-1.414-1.43z" fill={color || "#1BC17B"} />
  </Svg>
);

export default EditIcon;

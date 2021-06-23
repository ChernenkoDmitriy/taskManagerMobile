import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface FileIconProps {
  width?: number,
  height?: number,
  color?: string,
}

const FileIcon: FC<FileIconProps> = ({ width, height, color }) => (
  <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <Path fill={color || '#000000'} d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export default FileIcon;

import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

interface FilledVideoCameraProps {
  width?: number,
  height?: number,
  color?: string,
}

const FilledVideoCamera: FC<FilledVideoCameraProps> = ({ width, height, color }) => (
  <Svg width={width || 31} height={height || 30} viewBox="0 0 31 30">
    <G fill={color || "#fff"}>
      <Path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10zM22 17.25v-4.5l3.4-2.55a1 1 0 0 1 1.6.8v8a1 1 0 0 1-1.6.8L22 17.25z" />
    </G>
    <Defs />
  </Svg>
);

export default FilledVideoCamera;

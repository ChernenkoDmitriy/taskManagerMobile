import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

interface TurnOffCameraProps {
  width?: number,
  height?: number,
  color?: string,
}

const TurnOffCamera: FC<TurnOffCameraProps> = ({ width, height, color }) => (
  <Svg width={width || 38} height={height || 38} viewBox="0 0 38 38">
    <G filter="url(#a)">
      <Path fillRule="evenodd" clipRule="evenodd" d="M6 10h3.172L25 25.828V26a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2zm19 2v8.172L14.828 10H23a2 2 0 0 1 2 2zm2 4.025v5.95l5.419 3.838c.662.47 1.581 0 1.581-.806V12.992c0-.806-.92-1.275-1.581-.806L27 16.024z" fill={color || "#fff"} />
      <Path d="M5 5l28 28" stroke={color || "#fff"} strokeWidth="2" />
    </G>
    <Defs />
  </Svg>
);

export default TurnOffCamera;

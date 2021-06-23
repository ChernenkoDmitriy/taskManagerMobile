import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

interface SpeakerOffProps {
  width?: number,
  height?: number,
  color?: string,
}

const SpeakerOff: FC<SpeakerOffProps> = ({ width, height, color }) => (
  <Svg width={width || 40} height={height || 38} viewBox="0 0 40 38">
    <G filter="url(#a)">
      <Path fillRule="evenodd" clipRule="evenodd" d="M33.03 28.2a18.999 18.999 0 0 0-2.595-23.635l-1.414 1.414a17 17 0 0 1 2.555 20.769l1.453 1.453zm-3.924 1.735l1.414 1.414-.085.086-1.414-1.414.085-.086zm.269-5.388A13.99 13.99 0 0 0 31 18a14 14 0 0 0-4.1-9.9l-1.415 1.415a12.001 12.001 0 0 1 2.398 13.54l1.492 1.492zm-3.804 1.852l1.414 1.414-.085.087-1.415-1.415.086-.086zm0-5.656a8.999 8.999 0 0 0-2.207-9.107L21.95 13.05a6.999 6.999 0 0 1 1.965 6.037l1.657 1.656zm-3.536 2.12l1.414 1.415a9.895 9.895 0 0 1-.085.086L21.95 22.95l.085-.087zM19 14.172V9.459c0-1.235-1.483-1.91-2.46-1.119l-1.864 1.508L19 14.172zm-7.45-1.794l7.45 7.45v6.713c0 1.235-1.483 1.91-2.46 1.119L10 22.369H6c-1.105 0-2-.87-2-1.942v-4.854c0-1.072.895-1.942 2-1.942h4l1.55-1.253z" fill={color || "#fff"} />
      <Path d="M5 5l28 28" stroke={color || "#fff"} strokeWidth="2" />
    </G>
    <Defs />
  </Svg>
);

export default SpeakerOff;

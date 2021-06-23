import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface FillingMicrophoneProps {
  width?: string | number
  height?: string | number
  color?: string | number
}
const FillingMicrophone: FC<FillingMicrophoneProps> = ({ width, height, color }) => (
  <Svg width={width || 13} height={height || 18} viewBox="0 0 13 18">
    <Path fillRule="evenodd" clipRule="evenodd" d="M3.357 4.143a3.143 3.143 0 1 1 6.286 0V8.07a3.143 3.143 0 0 1-6.286 0V4.143zM1 6.498v1.575a5.5 5.5 0 0 0 5.323 5.497H6v3.143h1V13.57h-.323A5.5 5.5 0 0 0 12 8.073V6.498h-1v1.575a4.5 4.5 0 1 1-9 0V6.498H1z" fill={color || "#5C616D"} />
    <Path d="M1 6.498v-1H0v1h1zm5.323 7.072v1l.032-2-.032 1zm-.323 0v-1H5v1h1zm0 3.143H5v1h1v-1zm1 0v1h1v-1H7zm0-3.143h1v-1H7v1zm-.323 0l-.032-1 .032 2v-1zM12 6.498h1v-1h-1v1zm-1 0v-1h-1v1h1zm-9 0h1v-1H2v1zM6.5 0a4.143 4.143 0 0 0-4.143 4.143h2C4.357 2.959 5.317 2 6.5 2V0zm4.143 4.143A4.143 4.143 0 0 0 6.5 0v2c1.184 0 2.143.96 2.143 2.143h2zm0 3.928V4.143h-2V8.07h2zM6.5 12.214a4.143 4.143 0 0 0 4.143-4.143h-2c0 1.184-.96 2.143-2.143 2.143v2zM2.357 8.071A4.143 4.143 0 0 0 6.5 12.214v-2a2.143 2.143 0 0 1-2.143-2.143h-2zm0-3.928V8.07h2V4.143h-2zM2 8.073V6.498H0v1.575h2zm4.355 4.498A4.5 4.5 0 0 1 2 8.073H0a6.5 6.5 0 0 0 6.292 6.497l.063-2zm-.355 2h.323v-2H6v2zm1 2.142V13.57H5v3.143h2zm0-1H6v2h1v-2zM6 13.57v3.143h2V13.57H6zm.677 1H7v-2h-.323v2zM11 8.073a4.5 4.5 0 0 1-4.355 4.498l.063 1.999A6.5 6.5 0 0 0 13 8.073h-2zm0-1.575v1.575h2V6.498h-2zm0 1h1v-2h-1v2zm1 .575V6.498h-2v1.575h2zm-5.5 5.5a5.5 5.5 0 0 0 5.5-5.5h-2a3.5 3.5 0 0 1-3.5 3.5v2zM1 8.073a5.5 5.5 0 0 0 5.5 5.5v-2a3.5 3.5 0 0 1-3.5-3.5H1zm0-1.575v1.575h2V6.498H1zm0 1h1v-2H1v2z" fill={color || "#D4F8C7"} mask="url(#a)" />
  </Svg>
);

export default FillingMicrophone;

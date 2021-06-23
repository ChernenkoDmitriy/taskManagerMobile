import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface OneCheckMarkStatusMessageProps {
  width?: number,
  height?: number,
  color?: string,
}

const OneCheckMarkStatusMessage: FC<OneCheckMarkStatusMessageProps> = ({ width, height, color }) => (
    <Svg width={width || 18} height={height || 18} viewBox="0 0 20 20">
        <Path fillRule="evenodd" clipRule="evenodd" d="M13.256 5.709l-7.536 7.5-.706.702-.705-.702-3.014-3 1.41-1.418 2.31 2.298 6.83-6.798 1.41 1.418z" fill={color || "#949AA5"} />
    </Svg>
);

export default OneCheckMarkStatusMessage;
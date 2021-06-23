import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface RotateCameraProps {
    width?: number,
    height?: number,
    color?: string,
}

const RotateCamera: FC<RotateCameraProps> = ({ width, height, color }) => (
    <Svg width={width || 26} height={height || 21} viewBox="0 0 26 21">
        <Path fillRule="evenodd" clipRule="evenodd" d="M2 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3.586a1 1 0 0 1-.707-.293L17.586.586A2 2 0 0 0 16.172 0H9.828a2 2 0 0 0-1.414.586L6.293 2.707A1 1 0 0 1 5.586 3H2zm13.296 3.457a6 6 0 0 0-6.539 1.3l1.415 1.415A4 4 0 0 1 16.873 11H15l3 3 3-3h-2.084a6 6 0 0 0-3.62-4.543zM5 13l3-3 3 3H9.127a4 4 0 0 0 6.701 1.828l1.415 1.415A6 6 0 0 1 7.083 13H5z" fill={color || "#fff"} />
    </Svg>
);

export default RotateCamera;

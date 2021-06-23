import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface VideoCameraProps {
    width?: number,
    height?: number,
    color?: string,
}

const VideoCamera: FC<VideoCameraProps> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path d="M2 6a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zM17 10l4.36-3.633a1 1 0 0 1 1.64.768v9.73a1 1 0 0 1-1.64.768L17 14" stroke={color || "#1BC17B"} strokeWidth="2" />
    </Svg>
);

export default VideoCamera;

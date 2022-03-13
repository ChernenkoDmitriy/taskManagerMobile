import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const DeleteIcon: FC<{ height?: number; width?: number; color?: string }> = ({ height, width, color }) => (
    <Svg width={width || 22} height={height || 22} viewBox="0 0 50 50">
        <Path fill={color || '#000'} d="M21 2c-1.645 0-3 1.355-3 3v2h-7.846a1 1 0 00-.17-.014A1 1 0 009.84 7H8a1 1 0 100 2h1v36c0 1.645 1.355 3 3 3h26c1.645 0 3-1.355 3-3V9h1a1 1 0 100-2h-1.832a1 1 0 00-.326 0H32V5c0-1.645-1.355-3-3-3h-8zm0 2h8c.555 0 1 .445 1 1v2H20V5c0-.555.445-1 1-1zM11 9h7.832a1 1 0 00.326 0h11.674a1 1 0 00.326 0H39v36c0 .555-.445 1-1 1H12c-.555 0-1-.445-1-1V9zm7.984 4.986A1 1 0 0018 15v25a1 1 0 102 0V15a1 1 0 00-1.016-1.014zm6 0A1 1 0 0024 15v25a1 1 0 102 0V15a1 1 0 00-1.016-1.014zm6 0A1 1 0 0030 15v25a1 1 0 102 0V15a1 1 0 00-1.016-1.014z" />
    </Svg>
)

import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface PhoneProps {
    width?: number,
    height?: number,
    color?: string,
}

const Phone: FC<PhoneProps> = ({ width, height, color }) => (
    <Svg width={width || 21} height={height || 21} viewBox="0 0 21 21">
        <Path d="M11.6 14.139l-4.739-4.74a1 1 0 0 1 0-1.414l1.663-1.663a1 1 0 0 0 0-1.414L5.147 1.532a.752.752 0 0 0-1.063 0L2.91 2.705a5.357 5.357 0 0 0-.848 6.472 26.785 26.785 0 0 0 9.76 9.76 5.357 5.357 0 0 0 6.473-.847l1.173-1.174a.752.752 0 0 0 0-1.063l-3.376-3.377a1 1 0 0 0-1.414 0l-1.663 1.663a1 1 0 0 1-1.414 0z" stroke={color || "#1BC17B"} strokeWidth="2" />
    </Svg>
);

export default Phone;

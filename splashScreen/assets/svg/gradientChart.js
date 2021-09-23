import React from "react";
import Svg, { Path } from "react-native-svg";

const GradientChart = ({ width, height }) => (
    <Svg width={width || 120} height={height || 40} viewBox="0 0 120 30">
        <Path d="M0 15 L6 5 L12 10 L18 7 L24 16 L30 11 L36 9 L42 13 L48 12 L54 4 L60 15 L66 5 L72 10 L78 7 L84 16 L90 11 L96 9 L102 13 L108 12 L114 4 L120 15 L120 23 L0 23 L0 15        " stroke="#15c1d4" strokeWidth='1' fill="#15c1d4" />
    </Svg>
);

export default GradientChart;
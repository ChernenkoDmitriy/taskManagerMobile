import React from 'react';
import Svg, { Path } from 'react-native-svg';

const InfoIcon = ({ width, height, color }) => (
	<Svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
		<Path d="M11 0C4.935 0 0 4.935 0 11c0 6.066 4.935 11 11 11s11-4.934 11-11c0-6.065-4.935-11-11-11zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" fill={color || "#fff"} />
		<Path d="M11 4.667c-.735 0-1.333.598-1.333 1.333S10.265 7.333 11 7.333a1.334 1.334 0 0 0 0-2.667zM11 9.334a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1z" fill={color || "#fff"} />
	</Svg>
);

export default InfoIcon;

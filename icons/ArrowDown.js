import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDown = ({ width, height, color }) => (
	<Svg width={width || 25} height={height || 25} viewBox="0 0 12 12"><Path d="M6 9L3 5h6L6 9z" fill={color || '#FF9900'} /></Svg>
);

export default ArrowDown;
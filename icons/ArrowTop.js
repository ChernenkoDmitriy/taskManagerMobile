import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowTop = ({ width, height, color }) => (
	<Svg width={width || 25} height={height || 25} viewBox="0 0 12 12"><Path d="M6 5l3 4H3l3-4z" fill={color||'#FF9900'} /></Svg>
);

export default ArrowTop;

import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Back = ({ width, height, color }) => (
	<Svg width={width || 11} height={height || 16} viewBox="0 0 11 16"><Path d="M4.931 8.31l4.94 4.94a1.5 1.5 0 1 1-2.121 2.12L.69 8.31l7.06-7.06a1.5 1.5 0 1 1 2.121 2.12l-4.94 4.94z" fill={color||'#000'}/></Svg>
);

export default Back;

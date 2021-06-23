import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Bars = ({ width, height, color }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24"><G fill="none"><Path fill="none" d="M0 0h24v24H0z" />
		<Path d="M14 11V7a1 1 0 0 1 2 0v6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-4h-2a1 1 0 0 1 0-2h2zm-6 3V7a1 1 0 1 1 2 0v1h2a1 1 0 0 1 0 2h-2v7a1 1 0 0 1-2 0v-1H6a1 1 0 0 1 0-2h2z" fill={color} /></G></Svg>
);

export default Bars;

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Candles = ({ width, height, color }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24"><G fill="none"><Path fill="none" d="M0 0h24v24H0z" />
		<Path d="M17 7h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a1 1 0 0 1 2 0v1zM9 7h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9v1a1 1 0 0 1-2 0v-1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a1 1 0 1 1 2 0v1zM7 9v6h2V9H7zm8 0v6h2V9h-2z" fill={color} /></G></Svg>
);

export default Candles;

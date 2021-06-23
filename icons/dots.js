import React from 'react';
import Svg, { Circle } from 'react-native-svg';

const Dots = ({ width, height }) => (
	<Svg width={width || 32} height={height || 8} viewBox="0 0 16 4">
		<Circle cx="2" cy="2" r="2" fill="#D3DBE0" fill-opacity=".88" />
		<Circle cx="8" cy="2" r="2" fill="#D3DBE0" fill-opacity=".88" />
		<Circle cx="14" cy="2" r="2" fill="#D3DBE0" fill-opacity=".88" />
	</Svg>
);

export default Dots;

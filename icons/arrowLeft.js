import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeft = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
		<Path d="M20 19.29V4.71a1 1 0 0 0-1.49-.872l-12.96 7.29a1 1 0 0 0 0 1.744l12.96 7.29A1 1 0 0 0 20 19.29z" stroke="#FFFFFF" stroke-width="2" fill='#FFFFFF'/>
	</Svg>
);

export default ArrowLeft;

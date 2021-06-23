import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrow = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
		<Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill="#79838A" />
	</Svg>
);

export default RightArrow;

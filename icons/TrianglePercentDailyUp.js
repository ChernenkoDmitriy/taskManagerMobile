import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TrianglePercentDailyUp = ({width, height}) => (
	<Svg width={width || 12} height={height || 9} viewBox="0 0 8 6">
		<Path d="M4 0l4 6H0l4-6z" fill="#59C73D" />
	</Svg>
);

export default TrianglePercentDailyUp;
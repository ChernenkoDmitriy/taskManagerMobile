import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TrianglePercentDailyDown = ({width, height}) => (
	<Svg width={width || 12} height={height || 9} viewBox="0 0 8 6">
		<Path d="M4 6L0 0h8L4 6z" fill="#F86F6F" />
	</Svg>
);

export default TrianglePercentDailyDown;
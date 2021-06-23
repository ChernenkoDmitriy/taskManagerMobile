import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Polygon = ({ width, height }) => (
	<Svg width={width || 8} height={height || 6} viewBox="0 0 8 6">
		<Path d="M4 6L.536 0h6.928L4 6z" fill="#FFF" />
	</Svg>
);

export default Polygon;

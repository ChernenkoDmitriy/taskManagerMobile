import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Union = ({ width, height }) => (
	<Svg width={width || 228} height={height || 72} viewBox={`0 0 ${width} ${height}`}>
		<Path fillRule="evenodd" clipRule="evenodd"
			d="M4 0a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h207.025a4 4 0 0 0 3.725-2.543l12.958-33.138a3.998 3.998 0 0 0-.034-2.998L214.782 2.458A3.998 3.998 0 0 0 211.092 0H4z"
			fill="#182E3D" />
	</Svg>
);

export default Union;

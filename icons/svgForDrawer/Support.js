import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Support = ({width, height}) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
		<Path d="M12 5.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zm0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1zM12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" fill="#79838A" />
	</Svg>
);

export default Support;

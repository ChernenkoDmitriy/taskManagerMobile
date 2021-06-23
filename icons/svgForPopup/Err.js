import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Err = ({ width, height }) => (
	<Svg width={width || 72} height={height || 72} viewBox="0 0 72 72">
		<Circle cx="36" cy="36" r="36" fill="#0C202E" />
		<Path opacity=".6" d="M36 62c-14.36 0-26-11.64-26-26s11.64-26 26-26 26 11.64 26 26-11.64 26-26 26z" fill="#D1193E" />
		<Path d="M36 55.5c10.77 0 19.5-8.73 19.5-19.5S46.77 16.5 36 16.5 16.5 25.23 16.5 36 25.23 55.5 36 55.5z" fill="#D1193E" />
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M29.772 29.772a.928.928 0 0 0 0 1.313L34.687 36l-4.915 4.915a.928.928 0 1 0 1.313 1.313L36 37.313l4.915 4.915a.928.928 0 1 0 1.313-1.313L37.313 36l4.915-4.915a.928.928 0 1 0-1.313-1.313L36 34.687l-4.915-4.915a.928.928 0 0 0-1.313 0z" fill="#fff" />
	</Svg>
);

export default Err;

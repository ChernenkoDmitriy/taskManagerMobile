import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Info = ({ width, height }) => (
	<Svg width={width || 72} height={height || 72} viewBox="0 0 72 72">
		<Circle cx="36" cy="36" r="36" fill="#0C202E" />
		<Path opacity=".6" d="M36 62c-14.36 0-26-11.64-26-26s11.64-26 26-26 26 11.64 26 26-11.64 26-26 26z" fill="#F90" />
		<Path d="M36 55.5c10.77 0 19.5-8.73 19.5-19.5S46.77 16.5 36 16.5 16.5 25.23 16.5 36 25.23 55.5 36 55.5z" fill="#F90" />
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M36 43.43a.929.929 0 0 0 .928-.93v-9.285a.929.929 0 0 0-1.857 0V42.5c0 .513.416.928.928.928zm0-13.001a1.393 1.393 0 1 0 0-2.786 1.393 1.393 0 0 0 0 2.786z" fill="#fff" />
	</Svg>
);

export default Info;

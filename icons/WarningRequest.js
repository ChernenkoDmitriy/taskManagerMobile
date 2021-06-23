import React from 'react';
import Svg, { Path } from 'react-native-svg';

const WarningRequest = props => (
	<Svg width={props.width || 52} height={props.height || 52} viewBox="0 0 52 52"><Path opacity=".6" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26z" fill="#D1193E" />
		<Path d="M26 45.5c10.77 0 19.5-8.73 19.5-19.5S36.77 6.5 26 6.5 6.5 15.23 6.5 26 15.23 45.5 26 45.5z" fill="#D1193E" />
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M19.772 19.772a.928.928 0 0 0 0 1.313L24.687 26l-4.915 4.915a.928.928 0 1 0 1.313 1.313L26 27.313l4.915 4.915a.928.928 0 1 0 1.313-1.313L27.313 26l4.915-4.915a.928.928 0 1 0-1.313-1.313L26 24.687l-4.915-4.915a.928.928 0 0 0-1.313 0z" fill="#fff" /></Svg>
);

export default WarningRequest;

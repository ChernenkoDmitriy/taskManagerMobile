import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CheckMark = ({ width, height, color }) => (
	<Svg width={width || 77} height={height || 77} fill='none' viewBox="0 0 77 77">
		<Path clip-rule="evenodd" d="M38.5 76C59.21 76 76 59.21 76 38.5S59.21 1 38.5 1 1 17.79 1 38.5 17.79 76 38.5 76z" stroke={color} stroke-width="2" />
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M19.442 39.127a2.344 2.344 0 0 1 3.314 0l9.944 9.944 21.544-21.544a2.344 2.344 0 0 1 3.315 3.314L36.014 52.386a4.687 4.687 0 0 1-6.629 0l-9.943-9.944a2.344 2.344 0 0 1 0-3.315z" fill={color} />
	</Svg>
);

export default CheckMark;

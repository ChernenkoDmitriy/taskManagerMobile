import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Line = ({ width, height, color }) => (
	<Svg width={width || 36} height={height || 36} viewBox="0 0 28 26">
		<Path d="M7.723 20.783l3.977-3.959a.672.672 0 0 1 .686-.168l2.154 1.2a.678.678 0 0 0 .75-.249l3.876-3.657a.675.675 0 0 1 .826-.22l3.441 1.578a.681.681 0 0 0 .882-.3l3.662-6.563a.272.272 0 0 1 .385-.105.3.3 0 0 1 .138.255" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default Line;

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ChartArea = ({ width, height, color }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24"><G fill="none" fill-rule="evenodd"><Path d="M0 0h24v24H0z" />
		<Path d="M5.15 13.855l2.652-2.639a.448.448 0 0 1 .457-.112l1.436.8a.452.452 0 0 0 .504-.166L12.777 9.3a.45.45 0 0 1 .551-.147l2.294 1.053a.454.454 0 0 0 .588-.204l2.441-4.374a.181.181 0 0 1 .257-.07.203.203 0 0 1 .092.172v11.273c0 .552-.42 1-.938 1H5.938c-.517 0-.937-.448-.937-1V14.22c0-.138.054-.27.15-.365z" fill={color} /></G></Svg>
);

export default ChartArea;

import React from 'react';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const Rectangle = ({ width, height }) => (
	<Svg width={width || 132} height={height || 72} viewBox={`0 0 ${width} ${height}`}>
		<Rect width={`${width}`} height={`${height}`} rx="3" fill="url(#a)" />
		<Defs >
			<LinearGradient id="a" x1={`${width}`} y1="36" x2="-40.475" y2="36" gradientUnits="userSpaceOnUse">
				<Stop offset="0" stopColor="#142836" stopOpacity="1"/>
				<Stop offset="0.804" stopColor="#142836" stopOpacity="0" />
			</LinearGradient>
		</Defs>
	</Svg>
);

export default Rectangle;

import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const LitecoinIcon = ({ width, height }) => (
	<Svg width={width || 36} height={height || 36} viewBox="0 0 36 36">
		<Path d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z" fill="url(#a)" />
		<Path d="M16.974 23.462l1.14-4.403 2.701-1.01.672-2.588-.023-.064-2.659.995L20.721 9h-5.433l-2.505 9.647-2.092.783L10 22.097l2.09-.782L10.614 27h14.459L26 23.462h-9.026z" fill="#fff" />
		<Defs ><LinearGradient id="a" x1="18" x2="18" y2="36" gradientUnits="userSpaceOnUse">
			<Stop offset="0" stopOpacity="1" stopColor="#BEBEBE" />
			<Stop offset="1" stopOpacity="1" stopColor="#686767" />
		</LinearGradient>
		</Defs>
	</Svg>
);

export default LitecoinIcon;

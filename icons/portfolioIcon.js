import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PortfolioIcon = ({ width, height, color }) => (
	<Svg width={width || 25} height={height || 25} viewBox="0 -31 512 512">
		<Path d="M211 240h90v30h-90zm0 0" fill={color}/>
		<Path d="M415.379 270H331v15c0 8.29-6.71 15-15 15H196c-8.29 0-15-6.71-15-15v-15H96.621a44.95 44.95 0 0 1-42.687-30.762L0 77.41V405c0 24.813 20.188 45 45 45h422c24.813 0 45-20.188 45-45V77.422l-53.938 161.816A44.94 44.94 0 0 1 415.38 270zm0 0" fill={color}/>
		<Path d="M316 0H196c-24.813 0-45 20.188-45 45v15H25.809l56.574 169.746A14.997 14.997 0 0 0 96.62 240H181v-15c0-8.29 6.71-15 15-15h120c8.29 0 15 6.71 15 15v15h84.379c6.46 0 12.187-4.117 14.238-10.254L486.195 60H361V45c0-24.813-20.187-45-45-45zM181 60V45c0-8.277 6.723-15 15-15h120c8.277 0 15 6.723 15 15v15zm0 0" fill={color}/>
	</Svg>
);

export default PortfolioIcon;

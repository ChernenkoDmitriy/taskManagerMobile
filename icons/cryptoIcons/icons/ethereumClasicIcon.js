import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const EthereumClasicIcon = ({ width, height }) => (
	<Svg width={width || 36} height={height || 36} viewBox="0 0 36 36">
		<Path d="M35.462 22.355c-2.405 9.642-12.173 15.51-21.818 13.106C4.004 33.057-1.866 23.29.539 13.648 2.942 4.004 12.71-1.865 22.352.538c9.645 2.405 15.514 12.173 13.11 21.817z" fill="url(#a)" />
		<Path d="M17.997 3l-.196.684V23.52l.196.201 8.998-5.443L17.997 3z" fill="#BC92FF" />
		<Path d="M17.997 3L9 18.278l8.997 5.443V3z" fill="#E1CFFF" />
		<Path d="M17.997 25.465l-.11.138v7.066l.11.33L27 20.025l-9.003 5.44z" fill="#BC92FF" />
		<Path d="M17.997 33v-7.535L9 20.024 17.997 33z" fill="#E1CFFF" />
		<Path d="M17.997 23.721l8.997-5.442-8.997-4.186v9.628z" fill="#56407B" />
		<Path d="M9 18.279l8.997 5.442v-9.628L9 18.28z" fill="#886FB1" />
		<Defs >
			<LinearGradient id="a" x1="18" x2="18" y2="36" gradientUnits="userSpaceOnUse">
				<Stop offset="0" stopOpacity="1" stopColor="#B16BD1" />
				<Stop offset="1" stopOpacity="1" stopColor="#4E1469" />
			</LinearGradient>
		</Defs>
	</Svg>
);

export default EthereumClasicIcon;

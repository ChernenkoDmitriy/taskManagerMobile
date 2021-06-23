import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Wallet = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 36 36">
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M5.879 7.879A3 3 0 0 1 8 7h20a1 1 0 1 1 0 2H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-2a4 4 0 1 1 0-8v-2a.998.998 0 0 0-1.003-1H10a1 1 0 1 1 0-2h16.997A3.005 3.005 0 0 1 30 14v2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V10a3 3 0 0 1 .879-2.121zM29 18h-1a2 2 0 0 0 0 4h1v-4z" fill="#959FA3" />
	</Svg>
);

export default Wallet;

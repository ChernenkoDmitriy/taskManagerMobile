import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDown = ({ width, height }) => (
	<Svg width={width || 14} height={height || 14} viewBox="0 0 14 14"><Path d="M1.707 7.778c-.63-.63-.184-1.707.707-1.707h9.314c.89 0 1.337 1.077.707 1.707l-4.657 4.657a1 1 0 0 1-1.414 0L1.707 7.778z" fill="#959FA3" /></Svg>
);

export default ArrowDown;

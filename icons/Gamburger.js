import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const Gamburger = ({width, height})=> (
	<Svg width={width || 20} height={height || 19} viewBox="0 0 20 19"><Rect width="20" height="3" rx="1.5" fill="#959FA3" />
		<Rect y="8" width="20" height="3" rx="1.5" fill="#959FA3" />
		<Rect y="16" width="20" height="3" rx="1.5" fill="#959FA3" /></Svg>
);

export default Gamburger;

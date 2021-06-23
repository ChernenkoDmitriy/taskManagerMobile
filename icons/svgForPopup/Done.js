import React from 'react';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

const Done = ({ width, height }) => (
	<Svg width={width || 72} height={height || 72} viewBox="0 0 72 72">
		<Circle cx="36" cy="36" r="36" fill="#0C202E" />
		<Circle opacity=".6" cx="36" cy="36" r="26" fill="#2FC265" />
		<Ellipse cx="36" cy="36" rx="19.5" ry="19.5" fill="#2FC265" />
		<Path d="M32.552 43.746c-.358 0-.686-.12-.954-.388L25.67 37.43a1.33 1.33 0 0 1 0-1.907 1.331 1.331 0 0 1 1.906 0l5.005 4.975 11.887-11.857a1.331 1.331 0 0 1 1.907 0c.536.537.536 1.37 0 1.907l-12.84 12.81a1.421 1.421 0 0 1-.983.388z" fill="#fff" />
	</Svg>
);

export default Done;

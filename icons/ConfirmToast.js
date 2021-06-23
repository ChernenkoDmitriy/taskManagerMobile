import React from 'react';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

const ConfirmToast = props => (
	<Svg width={props.width || 52} height={props.height || 52} viewBox="0 0 52 52"><Circle opacity=".6" cx="26" cy="26" r="26" fill="#2FC265" />
		<Ellipse cx="26" cy="26" rx="19.5" ry="19.5" fill="#2FC265" />
		<Path d="M22.552 33.746c-.358 0-.686-.12-.954-.388L15.67 27.43a1.33 1.33 0 0 1 0-1.907 1.331 1.331 0 0 1 1.906 0l5.005 4.976L34.468 18.64a1.331 1.331 0 0 1 1.907 0c.536.537.536 1.37 0 1.907l-12.84 12.81a1.421 1.421 0 0 1-.983.388z" fill="#fff" /></Svg>
);

export default ConfirmToast;

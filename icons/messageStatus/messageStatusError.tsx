import React, { FC } from "react";
import Svg, { Path } from 'react-native-svg';

interface MessageStatusErrorProps {
	width?: number,
	height?: number,
	color?: string,
}

export const MessageStatusError: FC<MessageStatusErrorProps> = ({ width, height, color }) => (
	<Svg width={width || 18} height={height || 18} viewBox="0 0 24 24">
		<Path d="M0 0h24v24H0z" fill="none" />
		<Path fill={color || '#EB5757'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
	</Svg>
);
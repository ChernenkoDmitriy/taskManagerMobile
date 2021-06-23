import React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddPlusIcon = ({ width, height }) => (
	<Svg width={width || 30} height={height || 30} viewBox="0 0 30 30">
		<Path opacity="0.3" d="M28.581 18.387c-1.87 7.5-9.467 12.064-16.97 10.194C4.115 26.711-.45 19.114 1.42 11.615 3.29 4.114 10.886-.451 18.385 1.419c7.502 1.87 12.066 9.467 10.196 16.968z" stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" fill='#182E3D' />
		<Path d="M15.561 14.396H19.5a.5.5 0 0 1 .5.5v.057a.5.5 0 0 1-.5.5h-3.939V19.5a.5.5 0 0 1-.5.5h-.212a.5.5 0 0 1-.5-.5v-4.047H10.5a.5.5 0 0 1-.5-.5v-.057a.5.5 0 0 1 .5-.5h3.849V10.5a.5.5 0 0 1 .5-.5h.212a.5.5 0 0 1 .5.5v3.896z" fill="#BDBDBD" />
	</Svg>
);

export default AddPlusIcon;

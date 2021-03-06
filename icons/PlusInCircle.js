import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusInCircle = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 281.488 281.488">
		<Path d="M140.744 0C63.138 0 0 63.138 0 140.744s63.138 140.744 140.744 140.744 140.744-63.138 140.744-140.744S218.351 0 140.744 0zm0 263.488C73.063 263.488 18 208.426 18 140.744S73.063 18 140.744 18s122.744 55.063 122.744 122.744-55.063 122.744-122.744 122.744z" fill='#FF9900'/>
		<Path d="M210.913 131.744h-61.168V70.576c0-4.971-4.029-9-9-9s-9 4.029-9 9v61.168H70.576c-4.971 0-9 4.029-9 9s4.029 9 9 9h61.168v61.168c0 4.971 4.029 9 9 9s9-4.029 9-9v-61.168h61.168c4.971 0 9-4.029 9-9s-4.029-9-8.999-9z" fill='#FF9900'/>
	</Svg>
);

export default PlusInCircle;

import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownTr = ({ width, height, color }) => (
	<Svg width={width || 20} height={height || 20} viewBox="0 0 20 20">
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0zm0 19.167C4.952 19.167.833 15.049.833 10 .833 4.952 4.952.834 10 .834S19.167 4.952 19.167 10c0 5.049-4.119 9.167-9.167 9.167zm4.025-7.964a.497.497 0 0 0 0-.696c-.187-.188-.511-.188-.726.025l-2.802 2.78V5.48a.48.48 0 0 0-.483-.48.48.48 0 0 0-.484.48v7.834L6.676 10.48a.505.505 0 0 0-.7 0 .497.497 0 0 0 0 .696l3.629 3.688c.013.014.026.02.04.027.013.007.026.014.04.027 0 .027.027.027.027.027.014 0 .02.007.028.014.006.007.013.014.027.014.027.027.027.027.055.027h.324c.016-.016.022-.022.03-.025.006-.002.013-.002.025-.002.013 0 .02-.007.027-.014.007-.007.014-.014.027-.014l.028-.027c.025 0 .052-.027.08-.054l3.662-3.661z" fill={color || '#2FC265'} />
	</Svg>
);

export default ArrowDownTr;

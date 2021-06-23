import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LongArrow = ({ width, height, color }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 493.356 493.356">
		<Path fill={color || '#FFFFFF'} d="M490.498 239.278l-109.632-99.929c-3.046-2.474-6.376-2.95-9.993-1.427-3.613 1.525-5.427 4.283-5.427 8.282v63.954H9.136c-2.666 0-4.856.855-6.567 2.568C.859 214.438 0 216.628 0 219.292v54.816c0 2.663.855 4.853 2.568 6.563 1.715 1.712 3.905 2.567 6.567 2.567h356.313v63.953c0 3.812 1.817 6.57 5.428 8.278 3.62 1.529 6.95.951 9.996-1.708l109.632-101.077c1.903-1.902 2.852-4.182 2.852-6.849 0-2.468-.955-4.654-2.858-6.557z" />
	</Svg>
);

export default LongArrow;

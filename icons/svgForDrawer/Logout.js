import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Logout = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
		<Path fill-rule="evenodd" clip-rule="evenodd" d="M19.648 22H4.343A2.346 2.346 0 0 1 2 19.656V4.344A2.346 2.346 0 0 1 4.343 2h15.305a2.346 2.346 0 0 1 2.342 2.344v3.125H20.43V4.344c0-.431-.35-.782-.781-.782H4.343c-.431 0-.781.351-.781.782v15.312c0 .431.35.782.78.782h15.306c.43 0 .78-.351.78-.782v-3.125h1.562v3.125A2.346 2.346 0 0 1 19.648 22zm-.636-9.219H7.778V11.22h11.234L16.044 8.25l1.104-1.105L22.002 12l-4.853 4.855-1.104-1.105 2.968-2.969z" fill="#79838A" />
	</Svg>
);

export default Logout;

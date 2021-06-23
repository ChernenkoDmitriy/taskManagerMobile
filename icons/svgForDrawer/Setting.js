import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Setting = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
		<Path d="M18.12 12.78c.031-.25.052-.51.052-.78s-.021-.53-.062-.78l1.738-1.32a.405.405 0 0 0 .103-.51l-1.646-2.77c-.103-.18-.319-.24-.504-.18l-2.047.8a6.07 6.07 0 0 0-1.388-.78l-.309-2.12a.407.407 0 0 0-.411-.34h-3.292c-.205 0-.37.14-.4.34l-.31 2.12c-.504.2-.966.47-1.388.78l-2.047-.8a.412.412 0 0 0-.504.18L4.059 9.39a.38.38 0 0 0 .103.51L5.9 11.22a4.89 4.89 0 0 0-.072.78c0 .26.021.53.062.78L4.152 14.1a.405.405 0 0 0-.103.51l1.646 2.77c.103.18.319.24.504.18l2.047-.8c.432.32.884.58 1.388.78l.309 2.12c.041.2.206.34.411.34h3.292c.205 0 .38-.14.4-.34l.31-2.12c.504-.2.966-.47 1.388-.78l2.047.8c.185.07.401 0 .504-.18l1.646-2.77a.38.38 0 0 0-.103-.51l-1.718-1.32zM12 15c-1.697 0-3.086-1.35-3.086-3S10.303 9 12 9c1.697 0 3.086 1.35 3.086 3S13.697 15 12 15z" fill="#79838A" />
	</Svg>
);

export default Setting;

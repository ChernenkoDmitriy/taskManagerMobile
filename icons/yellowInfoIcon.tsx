import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const YellowInfoIcon = () => (
	<Svg width={18} height={18} viewBox="0 0 18 18" fill="none" >
		<Path d="M9 18A9 9 0 109 0a9 9 0 000 18z" fill="#F90" />
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9 12.429A.429.429 0 009.428 12V7.714a.429.429 0 10-.857 0V12c0 .237.192.429.429.429zm0-6a.643.643 0 100-1.286.643.643 0 000 1.286z"
			fill="url(#prefix__paint0_linear)"
		/>
		<Defs>
			<LinearGradient
				id="prefix__paint0_linear"
				x1={9}
				y1={12.429}
				x2={9}
				y2={5.143}
				gradientUnits="userSpaceOnUse"
			>
				<Stop stopColor="#152834" />
				<Stop offset={1} stopColor="#040C11" />
			</LinearGradient>
		</Defs>
	</Svg>
);
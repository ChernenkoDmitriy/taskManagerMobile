import React from "react";
import Svg, { Path } from "react-native-svg";

const SuccessIcon = () => (
	<Svg
		width={23}
		height={23}
		viewBox="0 0 23 23"
		fill="none"
	>
		<Path
			d="M11.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0 0 5.149 0 11.5 5.149 23 11.5 23z"
			fill="#fff"
		/>
		<Path
			d="M10.982 12.708a1.708 1.708 0 01-2.415 0l-.805-.805a.57.57 0 00-.805 0v0a.57.57 0 000 .805L8.36 14.11a2 2 0 002.829 0l5.083-5.083a.57.57 0 000-.805v0a.57.57 0 00-.805 0l-4.485 4.485z"
			fill="#2FC265"
			stroke="#2FC265"
			strokeMiterlimit={10}
		/>
	</Svg>
);

export default SuccessIcon;

import React from "react";
import Svg, { Path } from "react-native-svg";

const WarningIcon = () => (
	<Svg
		width={35}
		height={27}
		viewBox="0 0 35 27"
		fill="none"
	>
		<Path
			d="M12.825 6.693c1.962-3.106 6.493-3.106 8.455 0l7.981 12.637c2.103 3.33-.29 7.67-4.227 7.67H9.072c-3.938 0-6.33-4.34-4.228-7.67l7.981-12.637z"
			fill="#D1193E"
		/>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17.185 9.333a.888.888 0 00-.888.888v8.107a.888.888 0 001.776 0V10.22a.888.888 0 00-.888-.888zm-.096 11.53a1.235 1.235 0 000 2.47h.193a1.235 1.235 0 000-2.47h-.193z"
			fill="#fff"
		/>
	</Svg>
);

export default WarningIcon;

import React, { FC } from "react";
import Svg, { Path } from "react-native-svg"

export const VisaIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 45} height={height || 45} viewBox="0 0 45 45" fill="none"  >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.206 16.738l-5.85 13.366H7.55L4.678 19.45c-.166-.654-.33-.891-.848-1.168-.889-.456-2.315-.892-3.576-1.149l.083-.396h6.14c.785 0 1.488.495 1.653 1.366l1.53 7.723 3.762-9.089h3.784zm14.947 9.01c.013-2.115-1.819-3.032-3.283-3.765-.977-.49-1.79-.897-1.781-1.523.02-.475.496-.99 1.53-1.128.516-.06 1.943-.12 3.555.594l.64-2.832c-.867-.297-1.984-.594-3.369-.594-3.555 0-6.078 1.822-6.098 4.416-.02 1.92 1.798 2.99 3.163 3.643 1.405.654 1.88 1.07 1.88 1.663-.02.891-1.115 1.287-2.149 1.307-1.788.02-2.837-.458-3.657-.831l-.043-.02-.662 2.93c.848.377 2.398.694 4.01.713 3.784 0 6.244-1.802 6.264-4.574zm9.425 4.356h3.328l-2.915-13.366h-3.08c-.703 0-1.282.376-1.53.97l-5.416 12.376h3.783l.744-2h4.63l.456 2.02zm-4.032-4.733l1.902-5.01 1.096 5.01h-2.997zm-18.171 4.733l2.977-13.366h-3.597l-2.977 13.366h3.597z"
                fill="#1A1F71"
            />
        </Svg>
    )
};
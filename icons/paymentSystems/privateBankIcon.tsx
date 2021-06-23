import React, { FC } from "react";
import Svg, { Path } from "react-native-svg"

export const PrivateBankIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 24} height={height || 25} viewBox="0 0 24 25" fill="none"  >
            <Path d="M9.377 14.621H0v9.38h9.377v-9.38z" fill="#231F20" />
            <Path
                d="M.01 0v11.677h2.483c6.527 0 9.835 3.31 9.835 9.838v2.484H24V0H.01zm19.033 4.968V19.04h-1.91c-.825-6.96-5.2-11.336-12.157-12.161v-1.92c3.183.01 10.884.01 14.067.01z"
                fill="#5FBA46"
            />
        </Svg>
    )
};
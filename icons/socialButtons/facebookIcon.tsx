import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const FacebookIcon: FC<{ width?: number, height?: number }> = () => {
    return (
      <Svg width={56} height={56} viewBox="0 0 56 56" fill="none">
        <Circle cx={28} cy={28} r={28} fill="#1976D2" />
        <Path
          d="M30 46h-6c-.553 0-1-.472-1-1.055V31.094h-3c-.553 0-1-.472-1-1.055v-6.328c0-.583.447-1.055 1-1.055h3v-5.273C23 13.313 26.14 10 30 10h6c.553 0 1 .472 1 1.055v6.328c0 .583-.447 1.055-1 1.055h-5v4.218h5c.294 0 .573.136.763.373.19.237.272.55.223.855l-1 6.328c-.08.509-.497.882-.986.882h-4v13.851c0 .583-.447 1.055-1 1.055z"
          fill="#fff"
        />
      </Svg>
    );
};
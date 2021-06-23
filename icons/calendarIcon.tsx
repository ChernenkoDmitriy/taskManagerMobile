import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const CalendarIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm6.43-20.283V9.782a1.44 1.44 0 011.393 1.433v11.342c0 .791-.643 1.443-1.434 1.443H9.612c-.793 0-1.435-.65-1.435-1.443V11.215c0-.778.629-1.41 1.393-1.433v1.935c0 .875.71 1.58 1.584 1.58h1c.875 0 1.594-.705 1.594-1.58V9.775h4.505v1.942c0 .875.719 1.58 1.593 1.58h1a1.58 1.58 0 001.584-1.58zm-11.28.542h.99c.3 0 .543-.243.543-.543V8.543c0-.3-.244-.543-.544-.543h-.988c-.3 0-.544.243-.544.543v3.173c0 .3.244.543.544.543zm9.672 0h-.988a.543.543 0 01-.544-.543V8.543c0-.3.244-.543.544-.543h.988c.3 0 .544.243.544.543v3.173c0 .3-.244.543-.544.543z"
                fill={color || "#BFD24E"}
            />
        </Svg>
    )
};
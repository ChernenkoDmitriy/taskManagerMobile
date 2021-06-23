import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const ShareIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none" >
            <Path
                d="M24.087 4.333a3.52 3.52 0 11-7.042 0 3.52 3.52 0 017.041 0z"
                fill="#000"
            />
            <Path
                d="M20.566 8.667a4.338 4.338 0 01-4.334-4.334A4.338 4.338 0 0120.566 0a4.338 4.338 0 014.333 4.333 4.338 4.338 0 01-4.333 4.334zm0-7.042a2.711 2.711 0 00-2.709 2.708 2.711 2.711 0 002.709 2.709 2.711 2.711 0 002.708-2.709 2.711 2.711 0 00-2.708-2.708zM24.087 21.666a3.52 3.52 0 11-7.042 0 3.52 3.52 0 017.041 0z"
                fill="#000"
            />
            <Path
                d="M20.566 25.999a4.338 4.338 0 01-4.334-4.333 4.338 4.338 0 014.334-4.334 4.338 4.338 0 014.333 4.334 4.338 4.338 0 01-4.333 4.333zm0-7.042a2.711 2.711 0 00-2.709 2.709 2.711 2.711 0 002.709 2.708 2.711 2.711 0 002.708-2.708 2.711 2.711 0 00-2.708-2.709zM8.92 13.001a3.52 3.52 0 11-7.041 0 3.52 3.52 0 017.042 0z"
                fill="#000"
            />
            <Path
                d="M5.4 17.334a4.338 4.338 0 01-4.334-4.333A4.338 4.338 0 015.4 8.668a4.338 4.338 0 014.333 4.333A4.338 4.338 0 015.4 17.334zm0-7.041a2.711 2.711 0 00-2.709 2.708A2.711 2.711 0 005.4 15.71 2.711 2.711 0 008.108 13 2.711 2.711 0 005.4 10.293z"
                fill="#000"
            />
            <Path
                d="M7.957 12.48c-.377 0-.743-.195-.942-.546a1.085 1.085 0 01.405-1.478l10.052-5.73a1.082 1.082 0 011.478.404c.296.52.114 1.181-.405 1.478l-10.053 5.73a1.076 1.076 0 01-.535.143zM18.01 21.418c-.183 0-.367-.045-.536-.142l-10.052-5.73a1.085 1.085 0 011.072-1.883l10.053 5.73a1.085 1.085 0 01-.538 2.025z"
                fill="#000"
            />
        </Svg>
    )
};
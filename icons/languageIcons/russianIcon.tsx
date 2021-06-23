import React, { FC } from 'react';
import Svg, { G, Path } from "react-native-svg"

export const RussianIcon: FC<{ width?: number, height?: number, color?: string, selected?: boolean }> = ({ width, height, color, selected }) => {
  return (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
      <G>
        <Path
          d="M16.001 31.999c8.836 0 16-7.163 16-16C32 7.163 24.837 0 16 0S.002 7.163.002 16c0 8.835 7.163 15.999 16 15.999z"
          fill="#fff"
        />
        <Path
          d="M31.087 10.668h-9.858a44.23 44.23 0 01.008 10.606h9.87c.577-1.651.894-3.424.894-5.271 0-1.872-.324-3.666-.914-5.335z"
          fill="#2B479D"
        />
        <Path
          d="M21.228 10.664h9.858a.1.1 0 00-.005-.014C29.034 4.876 23.766.628 17.438.064c2.449 1.343 3.164 5.596 3.79 10.6z"
          fill="#EFECEC"
        />
        <Path
          d="M17.438 31.934c6.34-.565 11.614-4.828 13.654-10.617l.015-.046h-9.87c-.622 5.031-1.34 9.315-3.8 10.663z"
          fill="#E63026"
        />
        <Path
          d="M0 16c0 1.848.317 3.621.893 5.272h21.166c.423-3.422.42-7.188-.008-10.606H.914A15.967 15.967 0 000 16.001z"
          fill="#3757A6"
        />
        <Path
          d="M.92 10.653a.196.196 0 01-.006.014h21.137c-.626-5.004-2.165-9.257-4.614-10.6a16.28 16.28 0 00-1.438-.065C9.04.002 3.12 4.447.92 10.653z"
          fill="#EFEFEF"
        />
        <Path
          d="M22.059 21.271H.893l.015.046C3.1 27.539 9.028 32 15.999 32c.485 0 .964-.024 1.437-.066 2.46-1.348 4.002-5.632 4.623-10.663z"
          fill="#E73B36"
        />
      </G>
    </Svg>
  )
};
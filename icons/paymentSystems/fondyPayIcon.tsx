import React, { FC } from "react";
import Svg, { Path, Mask, G } from "react-native-svg"

export const FondyPayIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 106} height={height || 23} viewBox="0 0 106 23" fill="none" >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.77 5.8h-5.886v3.94h5.677v2.327h-5.677v7.809h-2.549V3.473h8.434v2.326z"
                fill="#3D3D3D"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.473 11.626c0 1.812.627 3.301 1.882 4.469 1.247 1.167 2.687 1.751 4.32 1.751 1.772 0 3.267-.594 4.485-1.783 1.218-1.203 1.827-2.668 1.827-4.394 0-1.748-.601-3.213-1.805-4.395-1.196-1.189-2.676-1.783-4.441-1.783-1.758 0-3.242.594-4.452 1.783-1.21 1.175-1.816 2.626-1.816 4.352zm-2.57-.027c0-2.308.87-4.291 2.614-5.948 1.735-1.658 3.82-2.487 6.257-2.487 2.406 0 4.47.836 6.191 2.508 1.729 1.67 2.593 3.679 2.593 6.023 0 2.358-.868 4.36-2.604 6.003-1.743 1.65-3.847 2.474-6.312 2.474-2.18 0-4.138-.732-5.874-2.198-1.91-1.622-2.866-3.747-2.866-6.375z"
                fill="#62BA46"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.313 17.553h1.148c1.145 0 2.097-.117 2.855-.35a5.835 5.835 0 002.057-1.18c1.254-1.112 1.881-2.56 1.881-4.345 0-1.8-.62-3.258-1.86-4.377-1.115-.999-2.76-1.498-4.933-1.498h-1.148v11.75zm-2.55 2.327V3.477h3.545c1.7 0 3.041.163 4.026.488a7.588 7.588 0 012.876 1.626c1.743 1.543 2.615 3.573 2.615 6.087 0 2.521-.908 4.561-2.724 6.119-.911.78-1.867 1.32-2.866 1.625-.933.305-2.257.458-3.97.458h-3.501zM97.77 12.793l-5.513-9.316h2.932l3.861 6.554 3.872-6.554h2.932l-5.535 9.316v7.086H97.77v-7.086zM74.3 3.477V15.54L64.399 3.477h-2.456v16.402h2.55V7.795l9.902 12.084h2.456V3.477H74.3z"
                fill="#3D3D3D"
            />
            <Mask
                id="prefix__a"
                // maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={23}
            >
                <Path d="M0 22.921h23.296V.266H0V22.92z" fill="#fff" />
            </Mask>
            <G mask="url(#prefix__a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.548.266l-.342.198-3.912 2.273-.305.19v4.01L3.81 8.78l-.317.19v4.01L.317 14.824l-.317.19v5.244l.284.188 3.912 2.274.328.195.335-.192 3.258-1.84 3.218 1.839.34.194.34-.195 3.186-1.831 3.014 1.823.345.21.35-.203 4.002-2.273.384-.19v-5.243l-.316-.19-3.178-1.842V8.969l-.317-.189-3.178-1.842V2.926l-.404-.189L11.928.464l-.38-.198zm.1.757l3.96 2.273v4.012l3.495 2.031v4.012l3.494 2.031v4.505l-3.986 2.273-3.38-2.032-3.547 2.032-3.562-2.032-3.544 2.032-3.88-2.273v-4.505l3.495-2.031V9.339l3.494-2.031V3.296l3.96-2.273z"
                    fill="#3D3D3D"
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.676 7.338l-3.029 1.79-3.028-1.79v-3.58l3.028-1.79 3.03 1.79v3.58z"
                fill="#5AC341"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.676 19.424l-3.029 1.79-3.028-1.79v-3.58l3.028-1.79 3.03 1.79v3.58zM21.665 19.424l-3.028 1.79-3.029-1.79v-3.58l3.029-1.79 3.028 1.79v3.58zM7.687 19.424l-3.145 1.79-3.145-1.79v-3.58l3.145-1.79 3.145 1.79v3.58zM11.182 13.381l-3.028 1.79-3.029-1.79v-3.58l3.029-1.79 3.028 1.79v3.58zM18.171 13.381l-3.028 1.79-3.029-1.79v-3.58l3.029-1.79 3.028 1.79v3.58z"
                fill="#3D3D3D"
            />
        </Svg>
    )
};
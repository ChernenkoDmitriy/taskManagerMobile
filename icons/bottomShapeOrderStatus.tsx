import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const BottomShapeOrderStatus: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 333} height={height || 15} viewBox="0 0 333 15" fill="none" >
            <Path
                d="M0 .926h333v14.073l-10.406-5.902L312.188 15l-10.407-5.902L291.375 15l-10.406-5.902L270.562 15l-10.406-5.902L249.75 15l-10.406-5.902L228.938 15l-10.407-5.902L208.125 15l-10.406-5.902L187.312 15l-10.406-5.902L166.5 15l-10.406-5.902L145.688 15l-10.407-5.902L124.875 15l-10.406-5.902L104.062 15 93.656 9.097 83.25 15 72.844 9.097 62.438 15 52.03 9.097 41.625 15 31.219 9.097 20.812 15 10.406 9.097 0 15V.926z"
                fill={color || "#fff"}
            />
        </Svg>
    )
};
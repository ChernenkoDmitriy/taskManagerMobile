import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface ArrowBackIOSIconProps {
    width?: number,
    height?: number,
    color?: string,
}

const ArrowBackIOSIcon: FC<ArrowBackIOSIconProps> = ({ width, height, color }) => (
    <Svg width={width || 20} height={height || 14} viewBox="0 0 55.753 55.753">
        <Path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 1 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" dataOriginal="#000000" class="active-path" dataOld_color="#F9ECEC" fill={color || '#000'} />
    </Svg>
);

export default ArrowBackIOSIcon;
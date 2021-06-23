import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface SaveButtonProps {
    width?: number,
    height?: number,
    color?: string,
}

const SaveButtonIcon: FC<SaveButtonProps> = ({ width, height, color }) => (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
        <Path d="M8 6l4-4 4 4M12 2v13M8.444 9H4v12h16V9h-4.444" fill={'transparent'} 
                stroke={color || '#000000'}
                strokeWidth={2}
                />
    </Svg>
);

export default SaveButtonIcon;

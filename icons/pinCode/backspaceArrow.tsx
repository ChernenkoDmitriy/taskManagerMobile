import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface BackspaceArrowProps {
    width?: number,
    height?: number,
    color?: string,
}

const BackspaceArrow: FC<BackspaceArrowProps> = ({ width, height, color }) => (
    <Svg width={width || 29} height={height || 23} viewBox="0 0 29 23">
        <Path fillRule="evenodd" clipRule="evenodd" d="M12.568 7.312a1.118 1.118 0 0 1 1.58 0l7.364 7.363a1.118 1.118 0 1 1-1.581 1.581l-7.363-7.363a1.118 1.118 0 0 1 0-1.581z" fill={color || '#949AA5'} />
        <Path fillRule="evenodd" clipRule="evenodd" d="M21.049 7.312a1.118 1.118 0 0 0-1.581 0l-7.363 7.363a1.118 1.118 0 0 0 1.58 1.581l7.364-7.363a1.118 1.118 0 0 0 0-1.581z" fill={color || '#949AA5'} />
        <Path fillRule="evenodd" clipRule="evenodd" d="M9.077 2.512l-5.813 8.945L9.077 20.4h16.117c.617 0 1.118-.5 1.118-1.118V3.63c0-.617-.5-1.118-1.118-1.118H9.077zM7.864 22.637L.597 11.457 7.864.277h17.33a3.354 3.354 0 0 1 3.354 3.353v15.653a3.354 3.354 0 0 1-3.354 3.354H7.864z" fill={color || '#949AA5'} /></Svg>
);
export default BackspaceArrow;

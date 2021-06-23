import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const AddAddressIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
            <Path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="#BFD24E"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M24 16.0005C24 16.5768 23.5523 17.044 23 17.044L9 17.044C8.44772 17.044 8 16.5768 8 16.0005C8 15.4242 8.44772 14.957 9 14.957L23 14.957C23.5523 14.957 24 15.4242 24 16.0005Z" fill="white"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M15.9995 8C16.5758 8 17.043 8.44772 17.043 9L17.043 23C17.043 23.5523 16.5758 24 15.9995 24C15.4232 24 14.956 23.5523 14.956 23L14.956 9C14.956 8.44772 15.4232 8 15.9995 8Z" fill="white"/>
        </Svg>
        
    )
};
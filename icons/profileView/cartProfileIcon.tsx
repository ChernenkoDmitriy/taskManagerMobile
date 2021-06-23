
import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const CartProfileIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 22} height={height || 22} viewBox="0 0 512 512" fill="none">
            <Path
                d="M196.031 365.483c-30.047 0-54.402 24.356-54.402 54.403 0 30.042 24.355 54.398 54.402 54.398 30.043 0 54.399-24.356 54.399-54.398-.032-30.032-24.368-54.372-54.399-54.403zm0 88.801c-19 0-34.402-15.402-34.402-34.398 0-19 15.402-34.403 34.402-34.403 18.996 0 34.399 15.403 34.399 34.403 0 18.996-15.403 34.398-34.399 34.398zm0 0"
                fill={color || "#9FA5B4"}
                stroke={color || "#9FA5B4"}
                strokeWidth={15}
            />
            <Path
                d="M492.531 137.186H139.43l-7.2-40.3c-4.437-24.81-23.882-44.215-48.699-48.602L57.43 43.686c-5.442-.968-10.633 2.66-11.602 8.098a10.008 10.008 0 008.102 11.602l26.199 4.597a39.995 39.995 0 0132.402 32.403l35.399 199.699c4.18 23.894 24.941 41.324 49.199 41.3h210c22.062.067 41.547-14.374 47.902-35.5l47-155.8c.871-3.04.32-6.313-1.5-8.899a10.127 10.127 0 00-8-4zM435.93 299.983c-3.774 12.688-15.465 21.367-28.7 21.301h-210c-14.566.039-27.035-10.441-29.5-24.8l-24.699-139.4H479.13zm0 0"
                fill={color || "#9FA5B4"}
                stroke={color || "#9FA5B4"}
                strokeWidth={30}
            />
            <Path
                d="M406.031 365.483c-30.047 0-54.402 24.356-54.402 54.403 0 30.042 24.355 54.398 54.402 54.398 30.043 0 54.399-24.356 54.399-54.398-.032-30.032-24.368-54.372-54.399-54.403zm0 88.801c-19 0-34.402-15.402-34.402-34.398 0-19 15.402-34.403 34.402-34.403 18.996 0 34.399 15.403 34.399 34.403 0 18.996-15.403 34.398-34.399 34.398zm0 0"
                fill={color || "#9FA5B4"}
                stroke={color || "#9FA5B4"}
                strokeWidth={15}
            />
        </Svg>
    )
};
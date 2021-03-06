import React, { FC } from 'react';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const UsaIcon: FC<{ width?: number, height?: number, color?: string, selected?: boolean }> = ({ width, height, color, selected }) => {
  return (
    <Svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M6.878 29.142h18.247v-.001H6.878h.001zM16 0c-.314 0-.626.011-.935.029h1.87C16.627.011 16.316 0 16 0z"
          fill="#C42126"
        />
        <Path
          d="M20.73 5.854h7.64a16.08 16.08 0 00-3.131-2.91h-5.737c.475.835.883 1.82 1.228 2.91z"
          fill="#E7E7E7"
        />
        <Path
          d="M19.502 2.94h5.737A15.912 15.912 0 0016.936.03h-.493c1.452.182 2.118 1.256 3.059 2.91z"
          fill="#DC3027"
        />
        <Path
          d="M31.403 11.672a15.9 15.9 0 00-1.135-2.91h-8.79c.179.934.32 1.91.423 2.91h9.502z"
          fill="#E7E7E7"
        />
        <Path
          d="M20.985 8.76h9.284a16.007 16.007 0 00-1.9-2.91h-8.11c.287.905.53 1.881.726 2.91z"
          fill="#DC3027"
        />
        <Path
          d="M22.238 17.495h9.69c.046-.493.072-.992.072-1.496 0-.477-.025-.948-.066-1.415h-9.693c.031.968.03 1.943-.003 2.91z"
          fill="#E7E7E7"
        />
        <Path
          d="M31.935 14.586c-.088-1-.268-1.972-.53-2.91h-9.91c.099.953.164 1.928.197 2.91h10.243z"
          fill="#DC3027"
        />
        <Path
          d="M21.313 23.32h8.914c.476-.922.863-1.896 1.154-2.912h-9.637a34.447 34.447 0 01-.431 2.911z"
          fill="#E7E7E7"
        />
        <Path
          d="M31.38 20.407c.268-.938.455-1.91.548-2.91h-9.992a40.871 40.871 0 01-.204 2.91h9.648z"
          fill="#DC3027"
        />
        <Path
          d="M25.124 29.14a16.09 16.09 0 003.177-2.912h-7.507c-.351 1.095-.768 2.079-1.251 2.911h5.58z"
          fill="#E7E7E7"
        />
        <Path
          d="M20.512 26.23h7.79a16.023 16.023 0 001.924-2.912h-8.98c-.2 1.03-.444 2.008-.734 2.911zM15.42 31.99l-.098-.004.097.004zM16 32.001c3.392 0 6.535-1.058 9.124-2.858h-5.791C18.305 30.913 17.627 32 16 32z"
          fill="#DC3027"
        />
        <Path d="M16 32.002z" fill="#C42126" />
        <Path
          d="M20.031 2.943H6.761a16.082 16.082 0 00-3.13 2.911h17.627c-.344-1.09-.752-2.075-1.227-2.91z"
          fill="#F3F4F5"
        />
        <Path
          d="M6.762 2.94H20.03c-.94-1.654-2.137-2.728-3.588-2.91h-1.379a15.91 15.91 0 00-8.302 2.91z"
          fill="#E73625"
        />
        <Path
          d="M.598 11.672h21.809c-.104-1-.245-1.976-.423-2.91H1.732c-.468.922-.85 1.896-1.134 2.91z"
          fill="#F3F4F5"
        />
        <Path
          d="M3.631 5.85a16.02 16.02 0 00-1.899 2.91h20.252a25.658 25.658 0 00-.725-2.91H3.63z"
          fill="#E73625"
        />
        <Path
          d="M0 16.003c0 .504.026 1.003.072 1.495h22.53c.033-.967.033-1.942.002-2.91H.066c-.041.467-.066.938-.066 1.415z"
          fill="#F3F4F5"
        />
        <Path
          d="M.066 14.586h22.538a41.108 41.108 0 00-.197-2.91H.597c-.263.938-.443 1.91-.53 2.91z"
          fill="#E73625"
        />
        <Path
          d="M22.398 20.41H.619c.29 1.016.678 1.99 1.154 2.911h20.194c.18-.933.324-1.91.43-2.91z"
          fill="#F3F4F5"
        />
        <Path
          d="M.62 20.407h21.778c.102-.953.17-1.928.204-2.91H.072c.093 1 .28 1.972.548 2.91z"
          fill="#E73625"
        />
        <Path
          d="M6.876 29.14h13.107c.483-.833.9-1.817 1.25-2.912H3.7a16.084 16.084 0 003.177 2.911z"
          fill="#F3F4F5"
        />
        <Path
          d="M1.773 23.322A16.03 16.03 0 003.7 26.233h17.534c.29-.904.535-1.88.734-2.91H1.773zM15.323 31.99l.097.004c.193.007.386.011.58.011 1.627 0 2.954-1.088 3.982-2.859H6.877a15.916 15.916 0 008.446 2.844z"
          fill="#E73625"
        />
        <Path
          d="M15.67.01C7.47.177.787 6.507.067 14.56H15.67V.01z"
          fill="#283991"
        />
        <Path
          d="M3.202 9.066l.243.751h.79l-.639.464.244.751-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75zM3.202 11.719l.243.75h.79l-.639.465.244.751-.638-.464-.639.464.244-.751-.639-.464h.79l.244-.751zM5.854 5.088l.244.75h.79l-.64.465.245.75-.639-.463-.639.464.244-.75-.639-.465h.79l.244-.751zM5.854 7.738l.244.751h.79l-.64.464.245.751-.639-.464-.639.464.244-.751-.639-.464h.79l.244-.75zM5.854 10.393l.244.75h.79l-.64.464.245.751-.639-.464-.639.464.244-.75-.639-.464h.79l.244-.751zM1.189 12.358l-.244-.752.638-.463H.794l-.018-.055c-.086.268-.165.54-.237.814l.011-.009.639.465zM2.563 8.382l.639-.464.638.464-.244-.751.64-.464h-.79l-.244-.751-.244.75h-.291l-.16.248.3.217-.244.751zM5.854 3.939l.638.463-.243-.75.638-.465h-.456c-.387.29-.76.596-1.12.92l-.096.295.64-.463zM7.867 3.078l.639-.465.638.465-.244-.751.639-.464h-.79l-.033-.101c-.267.136-.532.279-.79.43l.185.135-.244.75zM8.506 3.762l.244.75h.79l-.639.464.244.751-.639-.464-.638.464.244-.75-.64-.465h.79l.244-.75zM8.506 6.414l.244.75h.79L8.9 7.63l.244.75-.639-.464-.638.465.244-.751-.64-.465h.79l.244-.75zM8.506 9.066l.244.751h.79l-.639.464.244.751-.639-.464-.638.464.244-.75-.64-.465h.79l.244-.75zM8.506 11.719l.244.75h.79l-.639.465.244.751-.639-.464-.638.464.244-.751-.64-.464h.79l.244-.751zM11.159 2.436l.244.75h.789l-.638.465.243.75-.638-.464-.64.464.245-.75-.639-.465h.79l.244-.75zM11.159 5.088l.244.75h.789l-.638.465.243.75-.638-.463-.64.464.245-.75-.639-.465h.79l.244-.751zM11.159 7.738l.244.751h.789l-.638.464.243.751-.638-.464-.64.464.245-.751-.639-.464h.79l.244-.75zM11.159 10.393l.244.75h.789l-.638.464.243.751-.638-.464-.64.464.245-.75-.639-.464h.79l.244-.751zM13.811 1.11l.244.75h.79l-.64.464.245.751-.639-.464-.639.464.244-.751-.639-.464h.79l.244-.75zM13.811 3.762l.244.75h.79l-.64.464.245.751-.639-.464-.639.464.244-.75-.639-.465h.79l.244-.75zM13.811 6.414l.244.75h.79l-.64.465.245.75-.639-.464-.639.465.244-.751-.639-.465h.79l.244-.75zM13.811 9.066l.244.751h.79l-.64.464.245.751-.639-.464-.639.464.244-.75-.639-.465h.79l.244-.75zM13.811 11.719l.244.75h.79l-.64.465.245.751-.639-.464-.639.464.244-.751-.639-.464h.79l.244-.751z"
          fill="#EFEFEF"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
};

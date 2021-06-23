import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const OrderIcon: FC<{ width?: number, height?: number, color?:string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 36} height={height || 22} viewBox="0 0 36 22" fill="none">
            <Path d="M7.6876 9.29194C7.23412 10.2212 7.25572 11.1289 7.77398 11.6475C8.29225 12.1662 9.19922 12.1878 10.1278 11.734C10.4517 12.7064 11.0995 13.3332 11.8553 13.3332C12.5896 13.3332 13.2374 12.7064 13.5829 11.734C14.5115 12.1878 15.4184 12.1878 15.9367 11.6475C16.455 11.1289 16.4766 10.2212 16.0231 9.29194C16.9948 8.96777 17.6211 8.31945 17.6211 7.56307C17.6211 6.8283 16.9948 6.17997 16.0231 5.8342C16.4766 4.90493 16.4766 3.99727 15.9367 3.47861C15.4184 2.95995 14.5115 2.93835 13.5829 3.39218C13.259 2.41969 12.6112 1.79297 11.8553 1.79297C11.1211 1.79297 10.4733 2.41969 10.1278 3.39218C9.19922 2.93835 8.29225 2.93834 7.77398 3.47861C7.25572 3.99727 7.23412 4.90493 7.6876 5.8342C6.71585 6.15836 6.08961 6.80669 6.08961 7.56307C6.08961 8.29784 6.71585 8.94616 7.6876 9.29194ZM8.44341 6.54736C8.59457 6.52575 8.70254 6.41769 8.76732 6.28802C8.83211 6.15836 8.81052 6.00709 8.72415 5.87743C8.22747 5.16427 8.09791 4.40788 8.40023 4.10533C8.70255 3.80278 9.45835 3.93245 10.171 4.4295C10.3005 4.51594 10.4517 4.53755 10.5813 4.47272C10.7108 4.40789 10.8188 4.29983 10.8404 4.14856C10.9916 3.28412 11.4235 2.6574 11.8553 2.6574C12.2872 2.6574 12.7191 3.28412 12.8703 4.14856C12.8919 4.29983 12.9998 4.40789 13.1294 4.47272C13.259 4.53755 13.4101 4.51594 13.5397 4.4295C14.2523 3.93245 15.0081 3.80278 15.3105 4.10533C15.6128 4.40788 15.4832 5.16427 14.9866 5.87743C14.9002 6.00709 14.8786 6.15836 14.9434 6.28802C15.0081 6.41769 15.1161 6.52575 15.2673 6.54736C16.1311 6.69863 16.7573 7.13085 16.7573 7.56307C16.7573 7.99529 16.1311 8.42751 15.2673 8.57878C15.1161 8.60039 15.0081 8.70844 14.9434 8.8381C14.8786 8.96777 14.9002 9.11905 14.9866 9.24871C15.4832 9.96187 15.6128 10.7183 15.3105 11.0208C15.0081 11.3234 14.2523 11.1937 13.5397 10.6966C13.4101 10.6102 13.259 10.5886 13.1294 10.6534C12.9998 10.7183 12.8919 10.8263 12.8703 10.9776C12.7191 11.842 12.2872 12.4687 11.8553 12.4687C11.4235 12.4687 10.9916 11.842 10.8404 10.9776C10.8188 10.8263 10.7108 10.7183 10.5813 10.6534C10.5381 10.6318 10.4733 10.6102 10.4085 10.6102C10.3221 10.6102 10.2358 10.6318 10.171 10.6966C9.45835 11.1937 8.70255 11.3234 8.40023 11.0208C8.09791 10.7183 8.22747 9.96187 8.72415 9.24871C8.81052 9.11905 8.83211 8.96777 8.76732 8.8381C8.70254 8.70844 8.59457 8.60039 8.44341 8.57878C7.57963 8.42751 6.95339 7.99529 6.95339 7.56307C6.95339 7.13085 7.57963 6.72024 8.44341 6.54736Z" fill={color || "#458D1C"}/>
            <Path d="M11.8337 10.0049C13.1726 10.0049 14.2523 8.92435 14.2523 7.58448C14.2523 6.24461 13.1726 5.16406 11.8337 5.16406C10.4949 5.16406 9.41513 6.24461 9.41513 7.58448C9.41513 8.90273 10.4949 10.0049 11.8337 10.0049ZM11.8337 6.00689C12.6975 6.00689 13.3885 6.69844 13.3885 7.56287C13.3885 8.4273 12.6975 9.11885 11.8337 9.11885C10.9699 9.11885 10.2789 8.4273 10.2789 7.56287C10.2789 6.69844 10.9699 6.00689 11.8337 6.00689Z" fill={color || "#458D1C"}/>
            <Path d="M35.6956 11.497L31.1824 10.33L29.1309 6.33197C29.0661 6.1807 28.915 6.09426 28.7422 6.09426H23.6675V0.432217C23.6675 0.194498 23.4732 0 23.2356 0H0.431889C0.19435 0 0 0.194498 0 0.432217V16.6619C0 16.8997 0.19435 17.0942 0.431889 17.0942H2.61292C2.56973 17.3103 2.54814 17.5264 2.54814 17.7425C2.54814 19.6659 4.12454 21.2434 6.04644 21.2434C7.96835 21.2434 9.54475 19.6659 9.54475 17.7425C9.54475 17.5264 9.52315 17.3103 9.47997 17.0942H23.2356H26.9067C26.8635 17.3103 26.8419 17.5264 26.8419 17.7425C26.8419 19.6659 28.4183 21.2434 30.3402 21.2434C32.2621 21.2434 33.8385 19.6659 33.8385 17.7425C33.8385 17.5264 33.8169 17.3103 33.7737 17.0942H35.566C35.8036 17.0942 35.9979 16.8997 35.9979 16.6619V11.9076C36.0195 11.7131 35.8684 11.5402 35.6956 11.497ZM22.8037 0.886039V14.2632H0.863778V0.886039H22.8037ZM0.863778 16.2297V15.106H3.75744C3.41193 15.4085 3.10961 15.7975 2.89366 16.2297H0.863778ZM6.04644 20.4006C4.59962 20.4006 3.41192 19.212 3.41192 17.7641C3.41192 16.3162 4.59962 15.1276 6.04644 15.1276C7.49327 15.1276 8.68097 16.3162 8.68097 17.7641C8.68097 19.212 7.51487 20.4006 6.04644 20.4006ZM8.35705 15.1276H22.8253V16.2514H9.22083C9.00488 15.7975 8.70256 15.4301 8.35705 15.1276ZM30.3618 20.4006C28.915 20.4006 27.7273 19.212 27.7273 17.7641C27.7273 16.3162 28.915 15.1276 30.3618 15.1276C31.8086 15.1276 32.9963 16.3162 32.9963 17.7641C32.9963 19.212 31.8086 20.4006 30.3618 20.4006ZM35.1558 16.2297H33.5146C32.9531 15.0627 31.7438 14.2415 30.3618 14.2415C28.9797 14.2415 27.7705 15.0627 27.209 16.2297H23.6675V6.95869H28.4831L30.5129 10.8919C30.5777 10.9999 30.6641 11.0864 30.7937 11.108L35.1558 12.2317V16.2297Z" fill={color || "#458D1C"}/>
            <Path d="M6.04647 15.9062C5.03153 15.9062 4.21094 16.7275 4.21094 17.7432C4.21094 18.7589 5.03153 19.5801 6.04647 19.5801C7.06142 19.5801 7.88201 18.7589 7.88201 17.7432C7.9036 16.7275 7.06142 15.9062 6.04647 15.9062ZM6.04647 18.7373C5.50661 18.7373 5.07472 18.3051 5.07472 17.7648C5.07472 17.2245 5.50661 16.7923 6.04647 16.7923C6.58634 16.7923 7.01823 17.2245 7.01823 17.7648C7.03982 18.3051 6.58634 18.7373 6.04647 18.7373Z" fill={color || "#458D1C"}/>
            <Path d="M30.3617 15.9062C29.3468 15.9062 28.5262 16.7275 28.5262 17.7432C28.5262 18.7589 29.3468 19.5801 30.3617 19.5801C31.3767 19.5801 32.1973 18.7589 32.1973 17.7432C32.1973 16.7275 31.3767 15.9062 30.3617 15.9062ZM30.3617 18.7373C29.8219 18.7373 29.39 18.3051 29.39 17.7648C29.39 17.2245 29.8219 16.7923 30.3617 16.7923C30.9016 16.7923 31.3335 17.2245 31.3335 17.7648C31.3335 18.3051 30.9016 18.7373 30.3617 18.7373Z" fill={color || "#458D1C"}/>
            <Path d="M27.7921 8.19084C27.7273 8.03956 27.5761 7.95312 27.4034 7.95312H25.0496C24.812 7.95312 24.6177 8.14762 24.6177 8.38534C24.6177 8.62306 24.812 8.81755 25.0496 8.81755H27.1226L27.9 10.4168H25.0496C24.812 10.4168 24.6177 10.6112 24.6177 10.849C24.6177 11.0867 24.812 11.2812 25.0496 11.2812H28.5911C28.7422 11.2812 28.8718 11.1947 28.9582 11.0867C29.0445 10.957 29.0445 10.8057 28.9798 10.6761L27.7921 8.19084Z" fill={color || "#458D1C"}/>
        </Svg>
    )
};
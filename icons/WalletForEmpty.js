import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const WalletForEmpty = ({ width, height }) => (
	<Svg width={width || 174} height={height || 206} viewBox="0 0 174 206">
		<Path d="M130.986 106.43H37.902c-4.875 0-8.875 3.957-8.875 8.872v.25c.041 1.166.291 2.291.75 3.29.208.5.458.958.75 1.375v-4.415c0-.084.041-.167.041-.25 0-.084-.041-.167-.041-.25 0-4.041 3.291-7.373 7.375-7.373h93.084c2.875 0 5.25 2.333 5.25 5.249v9.497h1.5v-9.497a6.747 6.747 0 0 0-6.75-6.748z" fill="#F90" />
		<Path d="M113.522 149.823c12.903-5.287 19.077-20.029 13.789-32.928-5.288-12.9-20.036-19.072-32.94-13.785-12.903 5.286-19.077 20.029-13.788 32.928 5.288 12.899 20.035 19.071 32.939 13.785z" fill="#0E1C25" />
		<Path d="M79.944 136.377c-3-7.331-2.667-15.911 1.708-23.201 7.334-12.287 23.334-16.37 35.626-8.997 5.958 3.541 10.208 9.206 11.875 15.954 1.708 6.747.666 13.704-2.875 19.66-3.542 5.957-9.209 10.164-15.959 11.871-6.75 1.708-13.708.667-19.667-2.874-5-2.999-8.667-7.414-10.708-12.413zm3-22.451c-6.917 11.58-3.084 26.658 8.5 33.573a24.501 24.501 0 0 0 18.542 2.707c6.333-1.624 11.667-5.581 15.042-11.204 6.916-11.58 3.125-26.659-8.501-33.573-11.625-6.915-26.666-3.124-33.583 8.497z" fill="#F90" />
		<Path opacity=".3" fill-rule="evenodd" clip-rule="evenodd" d="M108.615 107.509c10.483 2.567 16.9 13.143 14.332 23.622a19.468 19.468 0 0 1-2.786 6.295c4.661-8.443 1.204-19.473-7.883-24.915-9.07-5.391-20.423-3.214-25.615 4.883 4.075-7.766 13.048-12.065 21.952-9.885zm-17.583 33.624a19.394 19.394 0 0 0 5.99 3.613 21.383 21.383 0 0 1-5.99-3.613z" fill="#F90" />
		<Path d="M85.569 134.046c-2.292-5.582-2.042-12.163 1.292-17.745 5.625-9.413 17.875-12.496 27.292-6.914 4.583 2.707 7.791 7.039 9.083 12.204 1.292 5.165.542 10.497-2.208 15.079-2.709 4.582-7.042 7.789-12.209 9.08-5.167 1.292-10.5.542-15.083-2.207a20.018 20.018 0 0 1-8.167-9.497zm1.958-17.37c-5.416 9.081-2.416 20.827 6.625 26.242 9.084 5.415 20.834 2.416 26.251-6.623 2.625-4.374 3.375-9.539 2.125-14.495-1.25-4.957-4.375-9.123-8.75-11.747-4.375-2.624-9.542-3.374-14.5-2.124-4.959 1.208-9.126 4.332-11.75 8.747z" fill="#F90" />
		<Path d="M109.111 130.921c-.083-.791-.458-1.541-1.083-2.207a3.446 3.446 0 0 0 1.958-.333 3.108 3.108 0 0 0 1.458-1.375c.334-.541.5-1.125.5-1.708s-.125-1.166-.333-1.666c-.25-.5-.583-.958-1-1.333-.333-.291-.833-.625-1.5-1.041l1.333-2.249-1.5-.875-1.333 2.249-.5-.291-1.208-.75 1.333-2.25-1.5-.874-1.333 2.249-1.084-.666-2.083-1.25-1.25 2.124 2.083 1.25-5.041 8.456-2.084-1.25-1.25 2.124 2.084 1.25v.042l1.083.666-1 1.708 1.5.875 1-1.708 1.75 1.041-1 1.708 1.458.875 1.042-1.708c.833.458 1.375.791 1.667.916a4.255 4.255 0 0 0 2.083.417 3.531 3.531 0 0 0 1.875-.667 4.31 4.31 0 0 0 1.417-1.458c.375-.749.541-1.499.458-2.291zm-3.25-8.747l.25.167c1.208.708 1.917 1.166 2.167 1.374.416.292.625.667.708 1.042.083.375 0 .749-.25 1.166-.25.417-.583.666-.958.75-.417.083-.834.041-1.292-.167-.25-.125-.875-.458-1.875-1.083l-1.667-1 1.75-2.957 1.167.708zm-.875 10.205a1.847 1.847 0 0 1-1.25-.041c-.292-.084-.875-.417-1.792-.958l-.625-.375-.5-.292-1.208-.75 2.042-3.415 2.083 1.249c1.167.709 1.875 1.208 2.167 1.542.291.333.416.666.458 1.041.042.375-.083.75-.292 1.125-.333.458-.666.749-1.083.874z" fill="#F90" />
		<Path d="M140.443 132.894a5.254 5.254 0 0 0-5.25-5.249H34.109a8.801 8.801 0 0 1-4.042-.999v67.187c0 5.581 4.542 10.121 10.125 10.121h98.293c.542 0 1.083-.125 1.542-.25.25-.583.375-1.208.375-1.916v-68.894h.041z" fill="#0E1C25" />
		<Path d="M98.99 167.153c-1-1.291-2.417-2.208-4.25-2.749 1.291-.584 2.333-1.458 3.083-2.666.75-1.166 1.125-2.499 1.125-3.916 0-1.291-.291-2.499-.916-3.54-.626-1.041-1.376-1.875-2.334-2.541-.916-.625-2-1.041-3.166-1.25-.876-.166-2.126-.25-3.667-.291v-5.332h-3.5v5.332H81.24v-5.332h-3.5v5.332h-7.584v5.04h5v20.077h-5v5.123h5v.042h2.584v4.04h3.5v-4.04h4.125v4.04h3.5v-4.082c1.916-.041 3.208-.083 3.875-.166 1.625-.167 3-.667 4.083-1.417 1.125-.791 2-1.832 2.625-3.124.625-1.291.959-2.624.959-3.998.041-1.75-.459-3.291-1.417-4.582zm-14.834-11.871h.584c2.875 0 4.625.041 5.208.083 1 .125 1.792.458 2.292 1.083.5.583.791 1.333.791 2.291s-.291 1.749-.916 2.374c-.584.583-1.417.958-2.459 1.083-.583.083-2.041.083-4.416.083h-4v-6.997h2.916zm9.125 18.702a3.863 3.863 0 0 1-2.208 1.208c-.583.125-2 .166-4.167.166h-5.625v-8.08h4.917c2.792 0 4.583.125 5.417.416.833.292 1.458.75 1.916 1.375.459.625.667 1.416.667 2.291-.041 1.166-.333 1.999-.916 2.624z" fill="#FCA800" />
		<Path d="M124.343 99.393c9.735-3.462 14.82-14.157 11.358-23.889-3.463-9.732-14.161-14.815-23.897-11.354-9.735 3.461-14.82 14.156-11.358 23.888 3.463 9.732 14.162 14.816 23.897 11.355z" fill="#0E1C25" />
		<Path d="M118.069 101.223c-2.541 0-5.125-.5-7.541-1.541-9.876-4.166-14.542-15.579-10.417-25.492 4.166-9.872 15.583-14.537 25.5-10.414 4.792 2 8.5 5.79 10.5 10.58 1.959 4.832 1.917 10.08-.083 14.912-2 4.79-5.792 8.498-10.584 10.497-2.375 1-4.875 1.458-7.375 1.458zm-16.542-26.408c-3.833 9.122.459 19.66 9.584 23.534 4.417 1.874 9.292 1.874 13.75.083 4.458-1.833 7.917-5.248 9.792-9.663 1.875-4.416 1.875-9.29.083-13.746-1.833-4.457-5.25-7.914-9.667-9.789-9.166-3.873-19.708.459-23.542 9.58z" fill="#F90" />
		<Path opacity=".3" fill-rule="evenodd" clip-rule="evenodd" d="M123.695 68.4c-7.375-3.082-15.875.375-18.959 7.748-.118.281-.226.564-.325.849 3.013-6.175 10.958-8.757 18.117-5.765 7.1 2.968 10.802 10.374 8.615 16.794.106-.22.206-.445.302-.674 3.083-7.372-.375-15.87-7.75-18.952zm-10.977 26.794z" fill="#F90" />
		<Path d="M118.069 96.599c-1.958 0-3.917-.375-5.75-1.166a14.772 14.772 0 0 1-8-8.081c-1.5-3.666-1.458-7.706.042-11.372a14.77 14.77 0 0 1 8.083-7.997c3.667-1.5 7.709-1.458 11.375.042 7.542 3.165 11.125 11.87 7.917 19.452a14.776 14.776 0 0 1-8.083 7.997c-1.792.792-3.667 1.125-5.584 1.125zm0-28.95c-1.792 0-3.625.334-5.333 1.042-3.5 1.416-6.209 4.124-7.667 7.581-1.458 3.457-1.458 7.29-.042 10.788 1.417 3.5 4.125 6.207 7.584 7.665 3.458 1.457 7.292 1.457 10.792.041 3.5-1.416 6.208-4.124 7.666-7.58 3-7.165-.375-15.454-7.541-18.453a14.497 14.497 0 0 0-5.459-1.083z" fill="#F90" />
		<Path d="M122.319 84.52c-.166-.583-.5-1.083-1.041-1.5.541 0 1-.166 1.416-.458.417-.291.75-.666.917-1.166.167-.458.25-.875.167-1.333-.042-.458-.209-.833-.417-1.166a2.913 2.913 0 0 0-.875-.875 14.955 14.955 0 0 0-1.208-.625l.75-1.79-1.167-.5-.75 1.79-.417-.166-.958-.417.75-1.79-1.167-.5-.75 1.79-.875-.374-1.667-.708-.708 1.707 1.667.708-2.834 6.748-1.666-.708-.709 1.708 1.667.708.875.375-.583 1.375 1.166.5.584-1.375 1.375.583-.584 1.374 1.167.5.583-1.374c.667.25 1.084.416 1.334.5.583.166 1.083.208 1.583.083a3.36 3.36 0 0 0 1.334-.666c.416-.334.708-.75.875-1.208.291-.625.333-1.208.166-1.75zm-3.291-6.081l.208.083c.958.416 1.542.666 1.75.75.333.166.542.416.625.666.083.25.083.542-.042.875a1.101 1.101 0 0 1-.625.666c-.291.125-.625.125-.958 0-.208-.041-.708-.25-1.5-.583l-1.334-.583 1-2.332.876.458zm.416 7.58a1.373 1.373 0 0 1-.916.084c-.209-.042-.709-.208-1.417-.541l-.5-.209-.417-.166-.958-.417 1.125-2.707 1.666.708c.917.374 1.501.708 1.751.916.25.208.375.458.458.75.042.291.042.583-.125.874-.167.292-.375.542-.667.709z" fill="#F90" />
		<Path d="M80.496 99c2.831-11.046-3.826-22.293-14.87-25.121-11.043-2.828-22.29 3.833-25.122 14.879-2.83 11.046 3.827 22.292 14.87 25.121 11.044 2.828 22.291-3.834 25.122-14.88z" fill="#0E1C25" />
		<Path d="M78.305 105.871a21.056 21.056 0 0 1-6.06 5.954c-9.899 6.474-23.223 3.712-29.757-6.174-6.47-9.899-3.704-23.226 6.183-29.763 4.784-3.155 10.54-4.214 16.157-3.092 5.63 1.185 10.41 4.457 13.6 9.266 3.153 4.784 4.21 10.54 3.087 16.159-.548 2.79-1.67 5.361-3.21 7.65zm-34.372-1.132c5.989 9.131 18.282 11.697 27.452 5.731 4.438-2.888 7.442-7.351 8.55-12.537 1.07-5.211.075-10.482-2.812-14.92-2.886-4.438-7.348-7.441-12.532-8.548-5.21-1.068-10.481-.07-14.92 2.817-9.195 6.005-11.726 18.326-5.738 27.457z" fill="#F90" />
		<Path opacity=".3" fill-rule="evenodd" clip-rule="evenodd" d="M70.034 81.438c-6.872-5.532-16.944-4.477-22.476 2.392-.21.261-.411.527-.602.797 5.089-5.618 14.301-5.914 20.971-.545 6.616 5.326 8.266 14.315 3.974 20.449.18-.202.357-.41.53-.624 5.532-6.868 4.474-16.938-2.397-22.47z" fill="#F90" />
		<Path d="M74.072 103.021a15.99 15.99 0 0 1-4.612 4.546 16.307 16.307 0 0 1-12.328 2.343c-4.28-.886-7.953-3.414-10.385-7.046a16.305 16.305 0 0 1-2.34-12.33c.888-4.28 3.417-7.955 7.05-10.387 7.546-4.954 17.724-2.869 22.687 4.74a16.304 16.304 0 0 1 2.34 12.33c-.38 2.128-1.23 4.05-2.412 5.804zM47.569 85.18a15.428 15.428 0 0 0-2.333 5.524c-.86 4.077-.051 8.225 2.215 11.691 2.266 3.466 5.774 5.828 9.85 6.687 4.077.86 8.225.049 11.69-2.219 3.467-2.268 5.83-5.777 6.69-9.854.86-4.077.051-8.225-2.215-11.69-4.71-7.163-14.379-9.182-21.541-4.469a15.996 15.996 0 0 0-4.356 4.33z" fill="#F90" />
		<Path d="M65.633 91.685c-.637-.207-1.3-.21-2.015.03a2.646 2.646 0 0 0 .453-1.58c-.01-.561-.148-1.097-.502-1.558-.317-.435-.647-.768-1.118-.974-.445-.244-.89-.323-1.324-.337a3.219 3.219 0 0 0-1.34.262c-.333.164-.755.379-1.317.72l-1.178-1.79-1.176.76 1.177 1.79-.41.28-.971.62-1.178-1.79-1.176.76 1.177 1.79-.882.57-1.676 1.09 1.127 1.7 1.676-1.089 4.431 6.753-1.675 1.089 1.127 1.701 1.675-1.089.882-.57.9 1.381 1.176-.76-.899-1.381 1.381-.9.9 1.382 1.176-.76-.899-1.381c.64-.457 1.049-.736 1.28-.913.511-.431.858-.864 1.051-1.398.194-.535.26-1.045.212-1.632a3.022 3.022 0 0 0-.567-1.545c-.392-.652-.9-1.05-1.498-1.23zm-7.597-.734l.205-.14c.972-.62 1.56-1 1.765-1.14.358-.202.715-.24.995-.161.28.077.547.257.776.577.227.32.29.639.224.983-.065.344-.27.649-.59.877-.167.165-.666.495-1.459 1.014l-1.355.861-1.52-2.353.96-.518zm7.198 4.29a1.52 1.52 0 0 1-.49.89c-.166.166-.626.52-1.368.964l-.499.33-.41.278-.971.62-1.785-2.698 1.675-1.09c.908-.607 1.573-.936 1.917-1.036.345-.101.651-.061.97.042.292.142.559.321.723.654.164.332.265.677.238 1.046z" fill="#F90" />
		<Path d="M103.057 47.404c.949-8.586-5.241-16.313-13.825-17.26-8.584-.946-16.312 5.247-17.26 13.833-.948 8.586 5.242 16.314 13.826 17.26 8.583.946 16.311-5.247 17.259-13.833z" fill="#0E1C25" />
		<Path d="M102.145 52.79a15.97 15.97 0 0 1-3.911 5.112c-6.737 5.908-17.024 5.254-22.977-1.466-5.905-6.736-5.249-17.026 1.471-22.981 3.253-2.875 7.457-4.281 11.79-4.038 4.349.29 8.282 2.236 11.187 5.503 2.873 3.252 4.278 7.457 4.034 11.791-.115 2.151-.682 4.2-1.594 6.08zm-25.9 2.809c5.463 6.212 14.956 6.828 21.199 1.378 3.021-2.639 4.8-6.306 5.079-10.313.249-4.023-1.059-7.87-3.696-10.892-2.637-3.021-6.303-4.8-10.31-5.078-4.02-.247-7.868 1.062-10.89 3.7-6.258 5.483-6.846 14.993-1.383 21.205z" fill="#F90" />
		<Path opacity=".3" fill-rule="evenodd" clip-rule="evenodd" d="M91.91 34.402c-6.212-2.464-13.265.556-15.73 6.766-.094.237-.18.476-.258.716 2.423-5.209 9.025-7.489 15.056-5.097 5.98 2.372 9.187 8.505 7.459 13.904.084-.185.165-.374.24-.565 2.465-6.21-.555-13.26-6.767-15.724zm-8.666 22.602z" fill="#F90" />
		<Path d="M98.667 51.104a12.11 12.11 0 0 1-2.976 3.9 12.351 12.351 0 0 1-8.997 3.07c-3.305-.21-6.329-1.715-8.539-4.18a12.35 12.35 0 0 1-3.066-9c.21-3.304 1.716-6.33 4.181-8.54 5.133-4.519 12.99-4.038 17.521 1.142a12.35 12.35 0 0 1 3.067 8.998c-.059 1.636-.492 3.169-1.191 4.61zM76.89 40.542a11.685 11.685 0 0 0-1.163 4.392c-.212 3.15.837 6.174 2.905 8.533 2.069 2.358 4.951 3.756 8.1 3.967 3.149.211 6.174-.838 8.532-2.908 2.359-2.07 3.757-4.953 3.969-8.102.212-3.15-.837-6.175-2.905-8.533-4.295-4.871-11.761-5.357-16.632-1.06a12.116 12.116 0 0 0-2.806 3.71z" fill="#F90" />
		<Path d="M91.13 43.5a2.367 2.367 0 0 0-1.507.236c.197-.408.24-.813.172-1.233-.067-.42-.228-.807-.543-1.115-.284-.293-.567-.507-.942-.612a2.177 2.177 0 0 0-1.03-.112 2.44 2.44 0 0 0-.976.34c-.232.158-.526.364-.911.68l-1.074-1.217-.802.695 1.074 1.217-.277.253-.663.569-1.074-1.218-.802.696 1.074 1.217-.601.522-1.14.995 1.025 1.156 1.141-.995 4.042 4.593-1.14.995 1.026 1.156 1.14-.995.602-.522.82.94.802-.694-.82-.94.94-.822.82.94.802-.695-.82-.94c.43-.41.708-.664.862-.821.338-.378.552-.74.64-1.16a2.804 2.804 0 0 0-.015-1.247 2.29 2.29 0 0 0-.59-1.099c-.363-.447-.786-.691-1.254-.764zm-5.775.257l.139-.127a81.974 81.974 0 0 0 1.202-1.043c.247-.19.511-.255.73-.227.218.029.438.135.642.351a.922.922 0 0 1 .274.713 1.062 1.062 0 0 1-.35.721c-.107.142-.446.442-.986.916l-.925.79-1.39-1.603.664-.491zm5.855 2.452a1.15 1.15 0 0 1-.272.72c-.107.142-.415.457-.924.868l-.34.3-.277.253-.663.569-1.626-1.834 1.14-.996c.617-.552 1.08-.87 1.329-.982.248-.112.481-.115.731-.07.234.074.454.18.612.412.159.232.27.48.29.76z" fill="#F90" />
		<G opacity=".5" fill="#F90"><Path d="M168.557 56.172a2.418 2.418 0 0 1 2.417-2.416 2.418 2.418 0 0 1 2.417 2.416 2.419 2.419 0 0 1-2.417 2.416 2.419 2.419 0 0 1-2.417-2.416zM73.221 1.916C73.221.833 74.096 0 75.138 0c1.083 0 1.916.875 1.916 1.916a1.911 1.911 0 0 1-1.916 1.916C74.096 3.874 73.22 3 73.22 1.916zM25.304 83.224a2.418 2.418 0 0 1 2.417-2.416 2.418 2.418 0 0 1 2.416 2.415 2.418 2.418 0 0 1-2.416 2.416c-1.334.042-2.417-1.083-2.417-2.415zM127.889 13.162c-3.292 0-6.001-2.666-6.001-5.998a6.001 6.001 0 0 1 12.001 0c-.042 3.29-2.709 5.998-6 5.998zm0-10.496c-2.459 0-4.501 1.999-4.501 4.498 0 2.458 2 4.499 4.501 4.499 2.458 0 4.5-2 4.5-4.499-.042-2.457-2.042-4.498-4.5-4.498zM6 72.13c-3.292 0-6-2.666-6-5.998a6 6 0 0 1 12 0c0 3.332-2.708 5.998-6 5.998zm0-10.455c-2.458 0-4.5 2-4.5 4.499 0 2.457 2 4.498 4.5 4.498s4.5-2 4.5-4.498c0-2.5-2.042-4.499-4.5-4.499zM26.685 18.619a2.366 2.366 0 0 0-1.508.236c.197-.407.24-.813.172-1.233-.067-.42-.228-.807-.543-1.115-.284-.293-.567-.507-.942-.612a2.175 2.175 0 0 0-1.03-.112 2.438 2.438 0 0 0-.976.34c-.232.158-.526.364-.911.68l-1.074-1.217-.802.695 1.074 1.218-.277.252-.663.57-1.074-1.219-.802.696 1.074 1.217-.601.522-1.14.995 1.025 1.156 1.141-.995 4.042 4.593-1.14.995 1.026 1.156 1.14-.995.602-.521.82.94.802-.695-.82-.94.94-.822.82.94.803-.695-.822-.94c.432-.41.709-.663.863-.821.338-.378.552-.739.64-1.16a2.805 2.805 0 0 0-.015-1.247 2.29 2.29 0 0 0-.59-1.099c-.363-.447-.786-.691-1.254-.764zm-5.776.257l.139-.127a82.936 82.936 0 0 0 1.202-1.042c.247-.19.511-.256.73-.227.218.028.438.134.642.35a.922.922 0 0 1 .274.713 1.062 1.062 0 0 1-.35.721c-.107.142-.446.442-.986.916l-.925.79-1.39-1.603.664-.491zm5.855 2.452a1.15 1.15 0 0 1-.272.72c-.107.142-.415.457-.924.868l-.34.3-.277.253-.663.569-1.626-1.834 1.14-.995c.617-.553 1.08-.87 1.329-.982.248-.113.481-.115.731-.072.235.075.454.182.612.413.159.232.27.48.29.76zM148.223 43.347c-.03-.85-.316-1.643-.912-2.393.737.183 1.417.11 2.083-.146.665-.256 1.245-.654 1.641-1.278.381-.568.635-1.107.676-1.758.098-.638-.003-1.205-.174-1.729-.171-.523-.47-1.019-.896-1.485a20.807 20.807 0 0 0-1.434-1.258l1.625-2.186-1.42-1.073-1.625 2.185-.511-.367-1.164-.89 1.625-2.186-1.42-1.074-1.624 2.186-1.065-.806-2.03-1.526-1.54 2.086 2.03 1.526-6.133 8.23-2.03-1.526-1.54 2.086 2.03 1.526 1.065.805-1.258 1.675 1.42 1.074 1.257-1.675 1.675 1.258-1.257 1.674 1.42 1.074 1.257-1.674c.823.565 1.334.932 1.647 1.13.737.423 1.404.648 2.127.647a4.707 4.707 0 0 0 2.04-.458 3.842 3.842 0 0 0 1.598-1.349c.608-.752.861-1.532.817-2.325zm-2.43-9.389l.255.184a133.64 133.64 0 0 0 2.13 1.61c.397.34.597.75.626 1.119.029.368-.069.765-.352 1.176-.282.412-.636.625-1.075.697-.44.072-.893-.04-1.305-.323-.27-.127-.88-.58-1.845-1.3l-1.619-1.243 2.148-2.838 1.037.918zm-1.989 10.46c-.44.072-.851.03-1.276-.195-.27-.127-.894-.523-1.746-1.215l-.611-.452-.511-.367-1.164-.89 2.445-3.307 2.03 1.526c1.121.82 1.803 1.47 2.073 1.838.27.367.356.75.371 1.175-.042.41-.14.808-.465 1.148-.325.341-.693.611-1.146.74zM95.263 15.329a4 4 0 0 1-4-4 4 4 0 0 1 8 0c.042 2.167-1.791 4-4 4zm0-6.54a2.507 2.507 0 0 0-2.5 2.5c0 1.374 1.125 2.498 2.5 2.498s2.5-1.124 2.5-2.499c.042-1.374-1.083-2.5-2.5-2.5zM57.304 20.91a.793.793 0 0 1-.417-1.083l2.792-6.332a.794.794 0 0 1 1.083-.416.793.793 0 0 1 .417 1.083l-2.792 6.331c-.166.417-.666.583-1.083.417z" />
			<Path d="M61.888 19.118l-6.334-2.79c-.416-.167-.625-.667-.416-1.084a.794.794 0 0 1 1.083-.416l6.333 2.79a.793.793 0 0 1 .417 1.084c-.167.416-.667.624-1.083.416zM37.782 53.47c-.417-.167-.625-.667-.417-1.084l2.792-6.331a.794.794 0 0 1 1.083-.417c.417.167.625.667.417 1.083l-2.792 6.332c-.166.416-.666.625-1.083.416z" />
			<Path d="M42.365 51.72l-6.333-2.791a.793.793 0 0 1-.417-1.083c.167-.417.667-.625 1.084-.417l6.333 2.791a.793.793 0 0 1 .417 1.083c-.167.417-.667.583-1.084.417zM149.456 89.145a.833.833 0 0 1 .583-1.04l6.667-1.834a.834.834 0 0 1 1.042.584.833.833 0 0 1-.584 1.04l-6.667 1.834a.833.833 0 0 1-1.041-.584z" />
			<Path d="M153.706 91.561l-1.834-6.664a.833.833 0 0 1 .584-1.042.833.833 0 0 1 1.041.583l1.834 6.665a.833.833 0 0 1-.584 1.041.833.833 0 0 1-1.041-.583z" /></G>
		<Path opacity=".5" d="M138.986 124.133H37.902c-3.084 0-5.75-1.583-7.376-3.957v6.04a8.801 8.801 0 0 0 4.042.999H135.653c2.875 0 5.25 2.333 5.25 5.249v68.894c0 .667-.125 1.292-.375 1.916 2.125-.666 3.666-2.624 3.666-4.956v-68.937c.042-2.874-2.333-5.248-5.208-5.248z" fill="#F90" />
		<Path d="M138.986 122.632H37.901c-3.958 0-7.208-3.166-7.333-7.081 0 .083-.042.166-.042.25v4.415a8.859 8.859 0 0 0 7.375 3.957H138.986c2.875 0 5.25 2.333 5.25 5.248v68.895a5.254 5.254 0 0 1-5.25 5.249H40.693c-5.583 0-10.125-4.541-10.125-10.122v-73.227a7.258 7.258 0 0 1-.75-1.375c-.458-.999-.708-2.124-.75-3.29v77.85c0 6.415 5.208 11.621 11.625 11.621h98.293c3.708 0 6.75-3.04 6.75-6.747V129.38c0-3.707-3.042-6.748-6.75-6.748z" fill="#F90" />
		<Path opacity=".5" d="M145.153 150.208h-9.167a13.553 13.553 0 0 0-10.583 5.04 13.586 13.586 0 0 1 8.25-2.791h9.167a3.734 3.734 0 0 1 3.75 3.749v19.827c0 .458-.084.875-.25 1.291 1.5-.499 2.583-1.874 2.583-3.54v-19.827a3.734 3.734 0 0 0-3.75-3.749z" fill="#F90" />
		<Path opacity=".5" d="M135.986 177.532c-7.542 0-13.667-6.123-13.667-13.663 0-3.29 1.167-6.289 3.084-8.622-3.292 2.499-5.417 6.415-5.417 10.872 0 7.539 6.125 13.662 13.667 13.662h9.167c1.625 0 2.958-1 3.5-2.458-.375.125-.75.209-1.167.209h-9.167z" fill="#F90" />
		<Path d="M145.153 178.281h-9.167c-7.958 0-14.417-6.456-14.417-14.412s6.459-14.412 14.417-14.412h9.167c2.458 0 4.5 1.999 4.5 4.499v19.827c0 2.499-2 4.498-4.5 4.498zm-9.167-27.324c-7.125 0-12.917 5.789-12.917 12.912 0 7.123 5.792 12.913 12.917 12.913h9.167c1.667 0 3-1.333 3-2.999v-19.827a2.986 2.986 0 0 0-3-2.999h-9.167z" fill="#F90" />
		<Path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M135.611 157.955a5.912 5.912 0 0 0-5.89 6.483c.252-2.425 2.269-4.318 4.723-4.318 2.625 0 4.75 2.166 4.75 4.832 0 2.479-1.836 4.525-4.204 4.8a5.913 5.913 0 0 0 6.538-5.882 5.912 5.912 0 0 0-5.917-5.915z" fill="#F90" />
		<Path d="M141.403 160.62l-1.25.792c.416.708.625 1.541.625 2.416a5.165 5.165 0 0 1-5.167 5.165 5.165 5.165 0 1 1 0-10.33c.458 0 .875.083 1.292.166l.416-1.416a5.83 5.83 0 0 0-1.708-.25c-3.667 0-6.667 2.999-6.667 6.665 0 3.665 3 6.664 6.667 6.664s6.667-2.999 6.667-6.664c0-1.125-.334-2.25-.875-3.208z" fill="#F90" />
		<Path d="M140.569 159.455a6.29 6.29 0 0 0-1.958-1.5l-.625 1.375a5.595 5.595 0 0 1 1.458 1.166l1.125-1.041z" fill="#F90" />
	</Svg>
);

export default WalletForEmpty;
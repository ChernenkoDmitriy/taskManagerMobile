import React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';

const EmptyNotificationSVG = ({ width, height }) => (
	<Svg width={width || 52} height={height || 89} viewBox="0 0 52 89"><G clip-path="url(#a)" fill="#9FA0B2">
		<Path d="M39.791 51.786v36.037l.888-.897.555-36.765-1.443 1.625zM8.546 51.786L5.55 55.597C3.052 58.68.944 61.37.222 63.724c-.444 1.625-.555 3.81 2.83 6.613.722.617 1.61 1.009 2.553 1.233 7.714 1.626 17.148-1.513 19.812-5.156l10.878-13.731-27.748-.897zM42.233 13.17l2.885-1.905V0l-2.996 1.345v31.722l.11-.056V13.17zM42.177 33.963c-.11 0-.277.112-.388.337a2.356 2.356 0 0 0-.389 1.289c0 .504.056 1.008.278 1.345.11.224.277.336.388.336.222 0 .722-.616.777-1.625 0-.505-.055-1.01-.277-1.345-.167-.168-.333-.28-.389-.337z" />
		<Path d="M45.119 7.566c-.944-.56-1.943-.953-2.942-1.289v26.005h.111V13.171l2.886-1.906V7.566h-.055z" />
		<Path d="M46.783 8.687v3.475l-2.885 1.905v19.336c0 .056.055.112.055.112.333.617.5 1.401.444 2.242-.11 1.85-1.165 3.25-2.442 3.25h-.11c-.722-.055-1.333-.504-1.721-1.232-.333-.617-.5-1.401-.444-2.242.055-.84.277-1.626.666-2.186 0-.056.055-.056.055-.112V5.885c-.777-.112-1.554-.224-2.33-.224h-1.443a12.46 12.46 0 0 0-8.547 3.362l-.832.841-9.546 9.752a14.583 14.583 0 0 1 4.107-.617h1.443c8.546 0 15.539 7.062 15.539 15.693v15.805L52 37.158v-20.4c-.721-3.251-2.664-6.11-5.217-8.07zM5.66 55.597C3.164 58.68 1.055 61.37.334 63.724c-.444 1.625-.555 3.81 2.83 6.613.722.617 1.61 1.009 2.553 1.233 7.714 1.625 17.148-1.513 19.812-5.156l10.878-13.731-27.749-.841-2.996 3.755z" />
		<Path d="M37.127 34.692c0-7.51-5.827-13.619-13.152-13.955V36.71h13.152v-2.018z" />
		<Path d="M37.127 38.335H22.309V20.68h-.499c-6.993 0-12.709 5.772-12.709 12.834V50.16l28.026.841V38.335zM5.66 55.597C3.164 58.68 1.055 61.37.334 63.724c-.444 1.625-.555 3.81 2.83 6.613.722.617 1.61 1.009 2.553 1.233 7.714 1.626 17.148-1.513 19.812-5.156l6.382-8.07v-5.83l-23.253-.728-2.996 3.811z" />
		<Path d="M36.405 52.627l-4.495-.113v5.83l4.495-5.718zM31.91 61.033V89h6.16V53.187l-6.16 7.846z" /></G>
	<Defs />
	</Svg>
);

export default EmptyNotificationSVG;
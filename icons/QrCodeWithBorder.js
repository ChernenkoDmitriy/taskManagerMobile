import React from 'react';
import Svg, { Path } from 'react-native-svg';

const QrCodeWithBorder = ({ width, height }) => (
	<Svg width={width || 24} height={height || 24} viewBox="0 0 512 512">
		<Path d="M15 159.886c8.284 0 15-6.716 15-15V60.031C30 43.472 43.472 30 60.032 30H144.5c8.284 0 15-6.716 15-15s-6.716-15-15-15H60.032C26.93 0 0 26.93 0 60.031v84.854c0 8.285 6.716 15.001 15 15.001zM144.5 482H60.032C43.472 482 30 468.528 30 451.969v-84.575c0-8.284-6.716-15-15-15s-15 6.716-15 15v84.575C0 485.07 26.93 512 60.032 512H144.5c8.284 0 15-6.716 15-15s-6.716-15-15-15zM497 352.394c-8.284 0-15 6.716-15 15v84.575c0 16.56-13.472 30.031-30.032 30.031H367.56c-8.284 0-15 6.716-15 15s6.716 15 15 15h84.408C485.07 512 512 485.07 512 451.969v-84.575c0-8.285-6.716-15-15-15zM451.968 0H367.56c-8.284 0-15 6.716-15 15s6.716 15 15 15h84.408C468.528 30 482 43.472 482 60.031v84.854c0 8.284 6.716 15 15 15s15-6.716 15-15V60.031C512 26.93 485.07 0 451.968 0z" fill='#ffffff' />
		<Path d="M59.367 78.574v142.58c0 10.273 8.358 18.632 18.632 18.632h142.58c10.273 0 18.632-8.358 18.632-18.632V78.574c0-10.273-8.358-18.632-18.632-18.632H77.999c-10.274 0-18.632 8.359-18.632 18.632zm30 11.368H209.21v119.844H89.367V89.942zM290.854 239.786h142.58c10.273 0 18.632-8.358 18.632-18.632V78.574c0-10.273-8.358-18.632-18.632-18.632h-142.58c-10.273 0-18.632 8.358-18.632 18.632v142.58c0 10.274 8.359 18.632 18.632 18.632zm11.368-149.844h119.844v119.844H302.222V89.942zM220.862 272.307H78.282c-10.273 0-18.632 8.358-18.632 18.632v142.58c0 10.273 8.358 18.632 18.632 18.632h142.58c10.273 0 18.632-8.358 18.632-18.632v-142.58c0-10.274-8.358-18.632-18.632-18.632zM209.494 422.15H89.65V302.307h119.844V422.15zM369.244 437.15c0 8.284 6.716 15 15 15h49.474c10.273 0 18.632-8.358 18.632-18.632v-46.539c0-8.284-6.716-15-15-15s-15 6.716-15 15v35.171h-38.106c-8.285 0-15 6.716-15 15z" fill='#ffffff' />
		<Path d="M172.738 108.702H125.84c-9.767 0-17.713 7.946-17.713 17.713v46.898c0 9.768 7.946 17.714 17.713 17.714h46.898c9.768 0 17.714-7.946 17.714-17.714v-46.898c0-9.767-7.947-17.713-17.714-17.713zm-12.286 52.325h-22.326v-22.325h22.326v22.325zM346.138 336.979c0-8.284-6.716-15-15-15h-36.079c-10.433 0-18.921 8.488-18.921 18.922v46.078c0 8.284 6.716 15 15 15s15-6.716 15-15v-35h25c8.284 0 15-6.715 15-15z" fill='#ffffff' />
		<Path d="M287.222 305.938h91.249v66.041h-38.125c-8.284 0-15 6.716-15 15s6.716 15 15 15h52.032c8.874 0 16.092-7.219 16.092-16.092V294.86c0-10.434-8.488-18.922-18.922-18.922H287.222c-8.284 0-15 6.716-15 15s6.716 15 15 15zM437.066 351.979c8.284 0 15-6.716 15-15v-46.041c0-8.284-6.716-15-15-15s-15 6.716-15 15v46.041c0 8.285 6.716 15 15 15zM359.138 437.15c0-8.284-6.716-15-15-15h-56.916c-8.284 0-15 6.716-15 15s6.716 15 15 15h56.916c8.284 0 15-6.715 15-15zM385.593 108.702h-46.898c-9.767 0-17.713 7.946-17.713 17.713v46.898c0 9.768 7.946 17.714 17.713 17.714h46.898c9.768 0 17.714-7.946 17.714-17.714v-46.898c0-9.767-7.946-17.713-17.714-17.713zm-12.286 52.325h-22.326v-22.325h22.326v22.325zM125.839 403.392h46.898c9.768 0 17.714-7.946 17.714-17.714V338.78c0-9.768-7.946-17.714-17.714-17.714h-46.898c-9.767 0-17.713 7.946-17.713 17.714v46.898c0 9.767 7.946 17.714 17.713 17.714zm12.287-52.327h22.326v22.326h-22.326v-22.326z" fill='#ffffff' />
	</Svg>
);

export default QrCodeWithBorder;

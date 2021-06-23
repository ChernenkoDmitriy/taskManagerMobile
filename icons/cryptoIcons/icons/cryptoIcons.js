import React from 'react';
import BitcoinIcon from './bitcoinIcon';
import LitecoinIcon from './litecoinIcon';
import EthereumIcon from './ethereumIcon';
import EthereumClasicIcon from './ethereumClasicIcon';
import DolarIcon from './dolarIcon';

export const getIcons = (fullName, width, height) => {
	let result = null;
	switch (fullName) {
	case 'Bitcoin':
		result = <BitcoinIcon {...{ width, height }} />;
		break;
	case 'Litecoin':
		result = < LitecoinIcon {...{ width, height }} />;
		break;
	case 'Ethereum':
		result = < EthereumIcon {...{ width, height }} />;
		break;
	case 'Ethereum Classic':
		result = < EthereumClasicIcon {...{ width, height }} />;
		break;
	case 'BTC':
		result = <BitcoinIcon {...{ width, height }} />;
		break;
	case 'LTC':
		result = < LitecoinIcon {...{ width, height }} />;
		break;
	case 'ETH':
		result = < EthereumIcon {...{ width, height }} />;
		break;
	case 'ETC':
		result = < EthereumClasicIcon {...{ width, height }} />;
		break;
	case 'DOLLAR':
		result = < DolarIcon {...{ width, height }} />;
		break;
	case 'Dollar':
		result = < DolarIcon {...{ width, height }} />;
		break;
	default:
	}
	return result;
};
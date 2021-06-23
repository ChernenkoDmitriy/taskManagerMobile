import React from 'react';
import BitcoinIcon from './icons/bitcoinIcon';
import LitecoinIcon from './icons/litecoinIcon';
import EthereumIcon from './icons/ethereumIcon';
import EthereumClasicIcon from './icons/ethereumClasicIcon';
import DolarIcon from './icons/dolarIcon';
import Bch from './icons/bch';
import Xlm from './icons/xlm';
import Xrp from './icons/xrp';

export const cryptoIcons = (fullName, width = 24, height = 24) => {
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
		case 'BCH':
			result = < Bch {...{ width, height }} />;
			break;
		case 'BitcoinCash':
			result = < Bch {...{ width, height }} />;
			break;
		case 'Ripple':
			result = < Xrp {...{ width, height }} />;
			break;
		case 'Stellar Lumen':
			result = < Xlm {...{ width, height }} />;
			break;
		case 'XRP':
			result = < Xrp {...{ width, height }} />;
			break;
		case 'XLM':
			result = < Xlm {...{ width, height }} />;
			break;
		default:
	}
	return result;
};
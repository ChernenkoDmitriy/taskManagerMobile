import React from 'react';
import { HryvniaIcon } from './hryvniaIcon';
import { RubleIcon } from './rubleIcon';
import { DollarIcon } from './dollarIcon';
import { EuroIcon } from './euroIcon';

export const currencyIcons = (item: any) => {
    let result = null;
    switch (item?.codeString) {
        case 'UAH':
            result = <HryvniaIcon selected />;
            break;
        case 'RUB':
            result = <RubleIcon selected />;
            break;
        case 'USD':
            result = <DollarIcon selected />;
            break;
        case 'EUR':
            result = <EuroIcon selected />;
            break;
        default:
    };
    return result;
};
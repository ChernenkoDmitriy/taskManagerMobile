import React from 'react';
import { UkraineIcon } from "./ukIcon";
import { RussianIcon } from "./russianIcon";
import { UsaIcon } from "./usaIcon";

export const languageIcons = (item: string) => {
    let result = null;
    switch(item){
        case 'uk': 
            result = <UkraineIcon />;
            break;
        case 'ru': 
            result = <RussianIcon />;
            break;
        case 'en': 
            result = <UsaIcon />;
            break;
        default:              
    };
    return result;
};
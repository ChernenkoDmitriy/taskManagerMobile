import React, { ComponentType } from 'react';
import { IConnector } from './IConnector';
import { observer } from 'mobx-react';
import { IPresenters } from '../factory/IPresenters';
import { BaseFactory } from '../baseFactory/BaseFactory';
import { Factory } from '../factory/Factory';

class Connector implements IConnector {

    connect = (Component: React.FC<any>, ...presenters: IPresenters[]): React.ComponentType => {
        const ObserverComponent: ComponentType<any> = observer(Component);

        return (ownProps: any): JSX.Element | null => {
            const { colorTheme: { colors }, localization: { t } } = BaseFactory.get() ;
            const props: any = { colors, t };

            if (Array.isArray(presenters)) {
                presenters.forEach((presenter) => {
                    props[presenter] = Factory.get(presenter, ownProps);
                });
            }

            return (
                <ObserverComponent {...props} {...ownProps} />
            );
        };
    }

}

export const connector = new Connector();
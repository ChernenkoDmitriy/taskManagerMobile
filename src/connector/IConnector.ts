import React from 'react';

export interface IConnector {
    connect: (Component:  React.FC<any>, ...presenters: any[]) => React.ComponentType;
}
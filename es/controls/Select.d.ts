import React, { Component } from 'react';
export interface SelectProps {
    value: string;
    onChange: React.ChangeEventHandler<any>;
}
export declare class Select extends Component<SelectProps> {
    constructor(props: SelectProps);
    handleChange(e: React.ChangeEvent<any>): void;
    render(): JSX.Element;
}

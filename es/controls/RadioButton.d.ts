import React, { Component } from 'react';
export declare type RadioButtonValue = string | number | boolean;
export interface RadioButtonProps {
    name: string;
    value: RadioButtonValue;
    onChange: React.EventHandler<any>;
    checked: boolean;
    label: string;
    description?: string;
}
export declare class RadioButton extends Component<RadioButtonProps> {
    constructor(props: RadioButtonProps);
    handleOnChange(): void;
    render(): JSX.Element;
}

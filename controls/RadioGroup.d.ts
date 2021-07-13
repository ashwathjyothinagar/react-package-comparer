import React, { Component } from 'react';
import { RadioButtonValue } from './RadioButton';
export interface RadioButtonItem {
    value: RadioButtonValue;
    label: string;
    description?: string;
}
export interface RadioGroupProps {
    name: string;
    label: string;
    value: RadioButtonValue;
    buttons: RadioButtonItem[];
    onChange: React.EventHandler<any>;
}
export declare class RadioGroup extends Component<RadioGroupProps> {
    constructor(props: RadioGroupProps);
    handleChange(value: RadioButtonValue): void;
    render(): JSX.Element;
}

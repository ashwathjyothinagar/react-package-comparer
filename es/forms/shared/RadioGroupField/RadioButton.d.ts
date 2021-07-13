import { Component, ComponentType } from 'react';
export declare type RadioButtonOptionValue = string | number | boolean;
export interface RadioButtonData<T = RadioButtonOptionValue> {
    label: string;
    value: T;
    RadioContent?: ComponentType<any>;
    disabled?: boolean;
}
export interface RadioButtonProps<T = RadioButtonOptionValue> {
    button: RadioButtonData<T>;
    id: string;
    checked: boolean;
    disabled?: boolean;
    hasFocus: boolean;
    onClick: (value: T) => void;
}
export declare class RadioButton<T = RadioButtonOptionValue> extends Component<RadioButtonProps<T>> {
    constructor(props: RadioButtonProps<T>);
    handleClick(): void;
    render(): JSX.Element;
}

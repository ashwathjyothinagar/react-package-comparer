import { Component } from 'react';
export declare type CheckboxValue = string | number | boolean;
export interface CheckboxData<T = CheckboxValue> {
    label: string;
    value: T;
}
export interface CheckboxProps<T = CheckboxValue> {
    id: string;
    checked: boolean;
    disabled?: boolean;
    checkbox: CheckboxData<T>;
    onChange: (value: T) => void;
}
export declare class Checkbox<T = CheckboxValue> extends Component<CheckboxProps<T>> {
    constructor(props: CheckboxProps<T>);
    render(): JSX.Element;
    private callOnChange;
    private handleClick;
    private handleKeyDown;
}

import { Component } from 'react';
import { ComponentsFieldProps } from '../';
export interface CheckboxFieldProps extends ComponentsFieldProps<(value: boolean) => void> {
    disabled: boolean;
}
export declare class CheckboxField extends Component<CheckboxFieldProps> {
    static defaultProps: {
        value: boolean;
        disabled: boolean;
    };
    constructor(props: CheckboxFieldProps);
    render(): JSX.Element;
    private handleClick;
    private handleKeyDown;
}

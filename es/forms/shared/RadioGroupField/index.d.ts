import { Component, KeyboardEvent } from 'react';
import { ComponentsFieldProps } from '../../';
import { RadioButtonOptionValue, RadioButtonData } from './RadioButton';
export interface RadioGroupFieldProps<T = RadioButtonOptionValue> extends ComponentsFieldProps<(value: T) => void> {
    buttons: Array<RadioButtonData<T>>;
    disabled?: boolean;
    error: any;
    touched: boolean;
}
export interface RadioGroupFieldState {
    hasFocus: boolean;
}
export { RadioButtonProps, RadioButtonData, RadioButtonOptionValue } from './RadioButton';
export declare class RadioGroupField<T = RadioButtonOptionValue> extends Component<RadioGroupFieldProps<T>, RadioGroupFieldState> {
    static defaultProps: {
        disabled: boolean;
        onFocus: () => void;
    };
    state: {
        hasFocus: boolean;
    };
    constructor(props: RadioGroupFieldProps<T>);
    handleItemChange(value: T): void;
    handleKeyDown(event: KeyboardEvent<HTMLUListElement>): void;
    render(): JSX.Element;
    private handleFocus;
    private handleBlur;
    private callOnChange;
    private getActiveIndex;
    private getWrappingIndex;
}

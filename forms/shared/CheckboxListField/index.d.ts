import { Component } from 'react';
import { CheckboxData, CheckboxValue } from './Checkbox';
import { ComponentsFieldProps } from '../../';
export interface CheckboxListFieldProps<T = CheckboxValue> extends ComponentsFieldProps {
    checkboxes: Array<CheckboxData<T>>;
    disabled?: boolean;
    className?: string;
    onChange: (value: T[]) => void;
}
export { CheckboxValue, CheckboxData } from './Checkbox';
export declare class CheckboxListField<T = CheckboxValue> extends Component<CheckboxListFieldProps<T>> {
    constructor(props: CheckboxListFieldProps<T>);
    render(): JSX.Element;
    private noop;
    private handleChange;
}

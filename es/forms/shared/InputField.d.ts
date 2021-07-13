import { SFC } from 'react';
import { ComponentsFieldProps } from '../';
export interface InputFieldProps extends ComponentsFieldProps {
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    placeholder: string;
    addonBefore?: JSX.Element | string;
    addonAfter?: JSX.Element | string;
    disabled?: boolean;
}
export declare const InputField: SFC<InputFieldProps>;

import React, { SFC } from 'react';
import { ComponentsFieldProps } from '../';
export interface TextAreaFieldProps extends ComponentsFieldProps {
    placeholder: string;
    height?: string;
}
export declare const TextAreaField: SFC<TextAreaFieldProps & React.InputHTMLAttributes<HTMLTextAreaElement>>;

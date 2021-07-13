import React, { SFC, CSSProperties } from 'react';
export declare namespace Types {
    type Style = 'danger' | 'success' | 'primary' | 'basic';
    type Size = 'small' | 'large' | 'xlarge';
}
export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    size: Types.Size;
    styleType: Types.Style;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    form?: string;
    styles?: CSSProperties;
}
export declare const Button: SFC<ButtonProps>;

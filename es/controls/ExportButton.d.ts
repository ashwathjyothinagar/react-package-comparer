import React, { SFC, CSSProperties } from 'react';
export declare namespace Types {
    type Style = 'danger' | 'success' | 'primary' | 'basic';
    type Size = 'small' | 'large' | 'xlarge';
}
export interface ExportButtonProps {
    type?: 'button' | 'submit' | 'reset';
    size: Types.Size;
    styleType: Types.Style;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    form?: string;
    styles?: CSSProperties;
    data: any;
    fileName: string;
}
export declare const ExportButton: SFC<ExportButtonProps>;

import { SFC, CSSProperties } from 'react';
export declare namespace Types {
    type Style = 'danger' | 'success' | 'primary' | 'basic';
    type Size = 'small' | 'large' | 'xlarge';
}
export interface LinkButtonProps {
    size: Types.Size;
    style: Types.Style;
    to: string;
    isAbsolute?: boolean;
    styles?: CSSProperties;
}
export declare const LinkButton: SFC<LinkButtonProps>;

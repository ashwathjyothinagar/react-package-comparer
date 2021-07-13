import { SFC } from 'react';
export interface LabelProps {
    text?: string;
    name: string;
    required?: boolean;
    parentElementType?: 'div' | 'fieldset';
}
export declare const Label: SFC<LabelProps>;

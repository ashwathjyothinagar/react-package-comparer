import { SFC, ReactNode } from 'react';
import { ComponentsFieldProps } from '../';
export interface SliderFieldProps extends ComponentsFieldProps {
    min?: number;
    max?: number;
    marks?: {
        number: ReactNode;
    };
    step?: number;
    vertical?: boolean;
    disabled?: boolean;
    dots?: boolean;
    defaultValue?: number;
    value?: number;
    tabIndex?: number;
}
export declare const SliderField: SFC<SliderFieldProps>;

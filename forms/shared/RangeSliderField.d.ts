import { SFC, ReactNode } from 'react';
import { ComponentsFieldProps } from '..';
export interface RangeSliderFieldProps extends ComponentsFieldProps {
    min?: number;
    max?: number;
    marks?: {
        number: ReactNode;
    };
    step?: number;
    vertical?: boolean;
    disabled?: boolean;
    dots?: boolean;
    defaultValue?: number[];
    value?: number[];
    tabIndex?: number[];
    count?: number;
    allowCross?: boolean;
    pushable?: boolean | number;
}
export declare const RangeSliderField: SFC<RangeSliderFieldProps>;

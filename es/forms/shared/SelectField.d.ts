import React from 'react';
import { ComponentsFieldProps } from '../';
export interface SelectFieldProps extends ComponentsFieldProps {
    options: Options;
    placeholder: string;
    searchable?: boolean;
    labelKey?: string;
    valueKey?: string;
    disabled?: boolean;
    clearable?: boolean;
    matchProp?: 'any' | 'label' | 'value' | string;
    onChange: (value: null | any) => void;
    isMulti?: boolean;
}
export declare const SelectField: React.SFC<SelectFieldProps>;
export declare type OptionValues = string | number | boolean;
export declare type Options<TValue = OptionValues> = Array<Option<TValue>>;
export interface Option<TValue = OptionValues> {
    label?: string;
    value?: TValue;
    clearableValue?: boolean;
    disabled?: boolean;
    [property: string]: any;
    chipLabel: string;
}

import React, { Component } from 'react';
import { ComponentsFieldProps } from '../';
import { Moment } from 'moment';
export declare const DefaultDateFormat = "M/D/YYYY";
export declare const DefaultTimeFormat = "h:mm A";
export declare const DefaultDateTimeFormat: string;
export interface DateFieldBaseProps extends ComponentsFieldProps {
    dateFormat: string;
    placeholder: string;
    onChange: (value: any) => void;
    onBlur: (value: any) => void;
    isValidDate?: (currentDate: Moment, selectedDate?: Moment) => boolean;
}
export interface DateFieldBaseState {
    formatString: string;
}
export declare class DateFieldBase<T extends DateFieldBaseProps> extends Component<T, DateFieldBaseState> {
    static defaultProps: {
        dateFormat: string;
    };
    constructor(props: T);
    render(): JSX.Element;
    protected timeFormat(): string | boolean;
    private renderInput;
    private handleChange;
}
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type DateFieldBaseWithoutFormat = Omit<DateFieldBaseProps, 'dateFormat'> & {
    dateFormat?: string;
};
export declare const DateField: React.ComponentClass<DateFieldBaseWithoutFormat, DateFieldBaseState>;
export {};

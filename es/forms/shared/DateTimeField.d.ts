import { DateFieldBase, DateFieldBaseProps } from './DateField';
export interface DateTimeFieldProps extends DateFieldBaseProps {
    timeFormat: string;
}
export declare class DateTimeField extends DateFieldBase<DateTimeFieldProps> {
    static defaultProps: {
        dateFormat: string;
        timeFormat: string;
    };
    constructor(props: DateTimeFieldProps);
    protected timeFormat(): string;
}

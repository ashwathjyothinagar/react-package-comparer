import { SFC } from 'react';
import moment from 'moment';
export interface DateTimePickerProps {
    label: string;
    timeFormat?: boolean | string;
    placeholder: string;
    value?: string;
    id: string;
    onChange: (value: string | moment.Moment) => void;
}
export declare const DateTimePicker: SFC<DateTimePickerProps>;

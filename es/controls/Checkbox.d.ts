import React, { SFC } from 'react';
export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: React.ChangeEventHandler<any>;
    disabled: boolean;
    hideLabel?: boolean;
    truncateLines?: number;
    backgroundColor?: string;
    id?: string;
}
export declare const Checkbox: SFC<CheckboxProps>;

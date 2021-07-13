import { SFC } from 'react';
import { ComponentsFieldProps } from '../';
export interface SwitchFieldProps extends ComponentsFieldProps<(checked: boolean) => void> {
    disabled?: boolean;
    offColor?: string;
}
export declare const SwitchField: SFC<SwitchFieldProps>;

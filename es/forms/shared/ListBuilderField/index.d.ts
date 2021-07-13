import { Component } from 'react';
import { ComponentsFieldProps } from '../../';
export interface ListBuilderFieldProps extends ComponentsFieldProps<(value: string[]) => void> {
    maxItems?: number;
    invalidItems: string[];
}
export declare class ListBuilderField extends Component<ListBuilderFieldProps> {
    static defaultProps: {
        invalidItems: never[];
    };
    constructor(props: ListBuilderFieldProps);
    render(): JSX.Element;
    private handleRemove;
    private handleAdd;
}

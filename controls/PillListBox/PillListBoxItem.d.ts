import { Component } from 'react';
export interface PillItem {
    label: string;
}
export interface PillListBoxItemProps<T extends PillItem> {
    isInvalid: boolean;
    item: T;
    onRemove: (item: T) => void;
}
export declare class PillListBoxItem<T extends PillItem> extends Component<PillListBoxItemProps<T>> {
    constructor(props: PillListBoxItemProps<T>);
    render(): JSX.Element;
    private handleRemoveClick;
}

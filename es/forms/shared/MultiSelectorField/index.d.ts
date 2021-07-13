import React, { Component } from 'react';
import { SelectItem } from './MultiSelectBox';
import { SortType, SortFunction } from './functions';
import { ComponentsFieldProps } from '../../';
export { SortType } from './functions';
export { SelectItem };
export interface MultiSelectorFieldPropsBase extends ComponentsFieldProps {
    onFilter?: (item: SelectItem, filterText: string) => boolean;
    onChange: (value: any) => void;
    sort?: SortType;
}
export interface MultiSelectorFieldProps extends MultiSelectorFieldPropsBase {
    items: SelectItem[];
}
export interface MultiSelectorFieldState {
    filterText: string;
    rightItems: SelectItem[];
    leftItems: SelectItem[];
    leftHighlightedIds: number[];
    rightHighlightedIds: number[];
    sortable: boolean;
}
export declare class MultiSelectorField extends Component<MultiSelectorFieldProps, MultiSelectorFieldState> {
    static defaultProps: {
        sort: SortType;
        items: never[];
    };
    sortFunction?: SortFunction;
    constructor(props: MultiSelectorFieldProps);
    render(): JSX.Element;
    componentWillReceiveProps(nextProps: MultiSelectorFieldProps): void;
    reset(items: SelectItem[], selectedIds: number[]): void;
    isMoveUpDisabled(): boolean;
    isMoveDownDisabled(): boolean;
    handleLeftSelectionChange: (leftHighlightedIds: number[]) => void;
    handleRightSelectionChange: (rightHighlightedIds: number[]) => void;
    handleAdd: (event?: React.MouseEvent<any, MouseEvent> | undefined) => void;
    handleRemove: (event?: React.MouseEvent<any, MouseEvent> | undefined) => void;
    handleMoveDown: (event?: React.MouseEvent<any, MouseEvent> | undefined) => void;
    handleMoveToBottom: (event?: React.MouseEvent<any, MouseEvent> | undefined) => void;
    handleMoveUp: (event?: React.MouseEvent<any, MouseEvent> | undefined) => void;
    handleMoveToTop: (event?: React.MouseEvent<any, MouseEvent> | undefined) => void;
    handleFilter: (event: React.FormEvent<HTMLInputElement>) => void;
    filterItem: (item: SelectItem, filter: string) => boolean;
    convertRightItemIdsToSelectItems: (newRightItemIds: number[]) => SelectItem[];
}

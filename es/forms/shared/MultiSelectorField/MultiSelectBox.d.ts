import React, { Component } from 'react';
export declare type SelectedIndexCreator = (index: number) => number;
export interface SelectItem {
    id: number;
    name: string;
}
export interface MultiSelectBoxProps {
    selectedIds: number[];
    onChange: (items: number[]) => void;
    onDoubleClick: React.MouseEventHandler<any>;
    selectItems: SelectItem[];
    pageSize?: number;
}
export interface MultiSelectBoxState {
    singleClick: boolean;
    rangeFromId: number;
    rangeToId: number;
    searchTerm: string;
}
export declare class MultiSelectBox extends Component<MultiSelectBoxProps, MultiSelectBoxState> {
    ulRef: HTMLUListElement | null;
    private liRefs;
    private readonly pageSize;
    constructor(props: MultiSelectBoxProps);
    isSelected(id: number): boolean;
    render(): JSX.Element;
    handleKeyPress(event: React.KeyboardEvent<any>): void;
    handleKeyDown(event: React.KeyboardEvent<any>): void;
    handleItemClick(event: React.MouseEvent<any>, id: number): void;
    navigateToItem(shouldExtendSelection: boolean, getSelectedIndex: SelectedIndexCreator): void;
    getRangeSelection(fromId: number, toId: number): number[];
}

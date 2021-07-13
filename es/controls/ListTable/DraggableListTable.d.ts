import React, { Component } from 'react';
import { DropResult as DnDDropResult, DragStart } from 'react-beautiful-dnd';
import { ListTableProps } from './';
export declare type DropReason = 'DROP' | 'CANCEL';
export declare type DroppableId = string;
export interface DragUpdate extends DragStart {
    destination?: DraggableLocation | null;
    items: Array<{
        id: string;
        index: number;
    }>;
}
export interface DropResult extends DragUpdate {
    reason: DropReason;
}
export interface DraggableLocation {
    draggableId: DroppableId;
    droppableId: DroppableId;
    index: number;
}
export interface DroppableItem {
    [key: string]: string | number | object;
    id: string;
    index: number;
}
export interface DraggableComponentProps {
    isDragHandle?: boolean;
    id?: string;
}
interface State {
    headers: React.ReactElement<any>;
    items: Array<React.ReactElement<any>>;
    footers: React.ReactElement<any>;
    isReorder: boolean;
}
export declare class DraggableListTable extends Component<ListTableProps, State> {
    static getDerivedStateFromProps(props: any, state: State): {
        state: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
        isReorder: boolean;
        headers?: undefined;
        items?: undefined;
        footers?: undefined;
    } | {
        headers: string | number | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal;
        items: (string | number | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal)[];
        footers: string | number | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal;
        state?: undefined;
        isReorder?: undefined;
    } | null;
    state: {
        headers: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
        items: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
        footers: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
        isReorder: boolean;
    };
    constructor(props: ListTableProps);
    onDragStart: (initial: DragStart) => void;
    onDragEnd: (result: DnDDropResult) => void;
    render(): JSX.Element;
}
export {};

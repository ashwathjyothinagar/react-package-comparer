import React, { Component, CSSProperties } from 'react';
import { DragStart } from 'react-beautiful-dnd';
import { ListTableRowProps } from './ListTableRow';
import { ListTableColumnProps } from './ListTableColumn';
import { ListTableInputColumnProps } from './ListTableInputColumn';
import { ListTableColumnHeaderProps } from './ListTableColumnHeader';
import { ListTableColumnFooterProps } from './ListTableColumnFooter';
import { DropResult } from './DraggableListTable';
export { ListTableColumnHeaderProps, ListTableColumnProps, ListTableColumnFooterProps, ListTableInputColumnProps, ListTableRowProps, };
export interface ListTableProps {
    className?: string;
    styles?: CSSProperties;
    forwardRef?: (element: HTMLElement | null) => any;
    isDraggable?: boolean;
    label?: string;
    onDragEnd?: (result: DropResult) => void;
    onDragStart?: (result: DragStart) => void;
    customProps?: string[];
}
export declare class ListTable extends Component<ListTableProps> {
    static Row: React.FunctionComponent<any>;
    static Column: React.FunctionComponent<any>;
    static InputColumn: React.FunctionComponent<ListTableInputColumnProps>;
    static ColumnHeader: React.FunctionComponent<ListTableColumnHeaderProps & React.HtmlHTMLAttributes<HTMLLIElement>>;
    static ColumnFooter: React.FunctionComponent<ListTableColumnFooterProps & React.HtmlHTMLAttributes<HTMLLIElement>>;
    static DragHandleColumn: React.FunctionComponent<{
        children?: undefined;
    }>;
    static DragHandleColumnHeader: React.FunctionComponent<{
        children?: undefined;
    }>;
    static DragHandleColumnFooter: React.FunctionComponent<{
        children?: undefined;
    }>;
    render(): React.ReactNode;
}

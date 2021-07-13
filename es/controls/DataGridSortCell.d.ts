import React, { SFC } from 'react';
export interface DataGridSortCellProps {
    position: 'first' | 'middle' | 'last';
    width: number;
    handleSortUp: React.MouseEventHandler<any>;
    handleSortDown: React.MouseEventHandler<any>;
}
export declare const DataGridSortCell: SFC<DataGridSortCellProps>;

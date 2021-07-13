import React, { SFC } from 'react';
export interface FixedWidth {
    kind: 'fixedWidth';
    fixedWidth: any;
}
export interface Width {
    kind: 'width';
    width: number;
}
export interface DataGridCellProps {
    widthType: Width | FixedWidth;
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    isColumnHeader?: boolean;
}
export declare const DataGridCell: SFC<DataGridCellProps>;

import { SFC } from 'react';
export interface PaginatorProps {
    pageCount: number;
    pageClickCallback: (selectedItem: {
        selected: number;
    }) => void;
    pageIndex: number;
    pageRangeDisplayed?: number;
    marginPagesDisplayed?: number;
}
export declare const Paginator: SFC<PaginatorProps>;

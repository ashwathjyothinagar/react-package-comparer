import { SFC, HtmlHTMLAttributes, CSSProperties } from 'react';
export interface ListTableColumnHeaderProps {
    className?: string;
    styles?: CSSProperties;
}
export declare const ListTableColumnHeader: SFC<ListTableColumnHeaderProps & HtmlHTMLAttributes<HTMLLIElement>>;

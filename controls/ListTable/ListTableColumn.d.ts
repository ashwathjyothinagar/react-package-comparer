import { HtmlHTMLAttributes, CSSProperties, FunctionComponent } from 'react';
import { DraggableComponentProps } from './DraggableListTable';
export interface ListTableColumnProps extends DraggableComponentProps {
    className?: string;
    styles?: CSSProperties;
}
export declare const HiddenListTableColumn: FunctionComponent<ListTableColumnProps & HtmlHTMLAttributes<HTMLLIElement>>;
export declare const ListTableColumn: FunctionComponent<any>;

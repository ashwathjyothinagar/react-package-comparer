import { SFC } from 'react';
import { PillItem } from './PillListBoxItem';
export interface PillListBoxProps<T extends PillItem> {
    items: T[];
    invalidItems: T[];
    maxItems?: number;
    onRemove: (item: T) => void;
}
export declare const PillListBox: SFC<PillListBoxProps<PillItem>>;

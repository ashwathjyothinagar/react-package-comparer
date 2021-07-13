import { SFC, MouseEvent, EventHandler } from 'react';
export interface SelectorButtonsProps {
    onAdd: EventHandler<MouseEvent<HTMLButtonElement>>;
    onRemove: EventHandler<MouseEvent<HTMLButtonElement>>;
    disableAdd: boolean;
    disableRemove: boolean;
}
export declare const SelectorButtons: SFC<SelectorButtonsProps>;

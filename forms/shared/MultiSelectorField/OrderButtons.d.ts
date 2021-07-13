import { SFC, MouseEvent, EventHandler } from 'react';
export interface OrderButtonsProps {
    onMoveToTop: EventHandler<MouseEvent<HTMLButtonElement>>;
    onMoveUp: EventHandler<MouseEvent<HTMLButtonElement>>;
    onMoveToBottom: EventHandler<MouseEvent<HTMLButtonElement>>;
    onMoveDown: EventHandler<MouseEvent<HTMLButtonElement>>;
    disableMoveUp: boolean;
    disableMoveDown: boolean;
}
export declare const OrderButtons: SFC<OrderButtonsProps>;

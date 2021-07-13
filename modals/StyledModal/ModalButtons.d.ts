import React, { SFC } from 'react';
import { ButtonProps } from '../../controls/Button';
export interface ModalButtonProps extends ButtonProps {
    text: string;
}
export interface ModalButtonsProps {
    additionalButtons?: ModalButtonProps[];
    closeCallback: React.MouseEventHandler<any>;
}
export declare const ModalButtons: SFC<ModalButtonsProps>;

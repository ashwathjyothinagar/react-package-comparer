import React, { SFC } from 'react';
import Modal from 'react-modal';
import { ModalButtonProps as ImportedModalButtonProps } from './ModalButtons';
export interface ModalButtonProps extends ImportedModalButtonProps {
    text: string;
}
export interface StyledModalProps extends Modal.Props {
    closeCallback: React.MouseEventHandler<any>;
    additionalButtons?: ModalButtonProps[];
    styles?: Modal.Styles;
}
export declare const StyledModal: SFC<StyledModalProps>;

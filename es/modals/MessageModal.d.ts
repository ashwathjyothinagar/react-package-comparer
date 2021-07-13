import React, { SFC, ComponentType } from 'react';
import { ModalButtonProps } from './StyledModal/ModalButtons';
export interface MessageModalProps {
    closeCallback: React.MouseEventHandler<any>;
    isOpen: boolean;
    contentLabel: string;
    iconType: 'none' | 'warning' | 'information' | 'error' | 'success';
    message: string;
    additionalButtons?: ModalButtonProps[];
    OptionalComponent?: ComponentType;
}
export declare const MessageModal: SFC<MessageModalProps>;
export declare const ModalIcon: SFC<{
    iconType: 'none' | 'warning' | 'information' | 'error' | 'success';
}>;

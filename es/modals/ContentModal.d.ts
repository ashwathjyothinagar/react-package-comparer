import { SFC } from 'react';
import { StyledModalProps } from './StyledModal';
export declare type Style = 'content' | 'multi-step';
export interface ContentModalProps extends StyledModalProps {
    modalType: Style;
}
export declare const ContentModal: SFC<ContentModalProps>;

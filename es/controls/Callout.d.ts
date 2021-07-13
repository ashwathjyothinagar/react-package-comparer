import React, { SFC } from 'react';
export declare type CalloutType = 'info' | 'warning' | 'success' | 'error';
export interface CalloutProps {
    type: CalloutType;
    leadInText?: string;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
export declare const Callout: SFC<CalloutProps>;

import { SFC, ComponentClass } from 'react';
import { StatusAppState } from './reducer';
export interface ToastStatusStateProps {
    isInBlockingCall: boolean;
    hasSpinners: boolean;
}
export declare const ToastStatusComponent: SFC<ToastStatusStateProps>;
export declare const mapStateToProps: (state: StatusAppState) => ToastStatusStateProps;
export declare const ToastStatus: ComponentClass<{}>;

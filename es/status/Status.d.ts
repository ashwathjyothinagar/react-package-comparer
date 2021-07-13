import { SFC, ComponentClass } from 'react';
import { StatusAppState } from './reducer';
export interface StatusStateProps {
    isInBlockingCall: boolean;
    hasSpinners: boolean;
}
export declare const StatusComponent: SFC<StatusStateProps>;
export declare const mapStateToProps: (state: StatusAppState) => StatusStateProps;
export declare const Status: ComponentClass<{}>;

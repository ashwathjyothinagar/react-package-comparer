import { Component, ComponentClass, SFC } from 'react';
import { StatusMessagesState, StatusMessageState } from './reducers/messages';
import { Dispatch, AnyAction } from 'redux';
import { StatusAppState } from './reducer';
export interface StatusMessagesStateProps {
    messages?: StatusMessagesState;
}
export interface StatusMessagesDispatchProps {
    onClose: (messageId: string) => void;
}
export declare type StatusMessagesProps = StatusMessagesStateProps & StatusMessagesDispatchProps;
export declare type StatusMessageProps = StatusMessageState & StatusMessagesDispatchProps;
export declare class StatusMessage extends Component<StatusMessageProps> {
    constructor(props: StatusMessageProps);
    render(): JSX.Element;
    private handleClose;
}
export declare const StatusMessagesComponent: SFC<StatusMessagesProps>;
export declare const mapStateToProps: (state: StatusAppState) => StatusMessagesStateProps;
export declare const mapDispatchToProps: (dispatch: Dispatch<AnyAction>) => StatusMessagesDispatchProps;
export declare const StatusMessages: ComponentClass<{}>;

import { CalloutType } from '../../controls/Callout';
export interface StatusMessageState {
    id: string;
    type: CalloutType;
    message: string;
    forceOverwriteKey?: string;
}
export declare type StatusMessagesState = StatusMessageState[] | undefined;
export declare const messagesReducer: import("redux-actions").Reducer<StatusMessagesState, any>;

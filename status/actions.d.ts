import { Action, ActionFunction1 } from 'redux-actions';
import { CalloutType } from '../controls/Callout';
export interface ShowMessageRequest {
    type: CalloutType;
    message: string;
    forceOverwriteKey?: string;
}
export interface HideMessageRequest {
    id: string;
}
export declare const showMessage: ActionFunction1<ShowMessageRequest, Action<ShowMessageRequest>>;
export declare const hideMessage: ActionFunction1<HideMessageRequest, Action<HideMessageRequest>>;
export declare const startBlockingCall: import("redux-actions").ActionFunctionAny<Action<any>>;
export declare const stopBlockingCall: import("redux-actions").ActionFunctionAny<Action<any>>;
export declare const incrementBlockingCounter: import("redux-actions").ActionFunctionAny<Action<any>>;
export declare const startSpinnerFor: ActionFunction1<string, Action<string>>;
export declare const stopSpinnerFor: ActionFunction1<string, Action<string>>;
export declare const addSpinnerFor: ActionFunction1<string, Action<string>>;

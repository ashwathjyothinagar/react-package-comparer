import { Reducer } from 'redux';
import { BlockingCallsState, StatusMessagesState, SpinnerState } from './reducers';
export interface StatusState {
    messages: StatusMessagesState;
    blockingCalls: BlockingCallsState;
    spinner: SpinnerState;
}
export interface StatusAppState {
    status: StatusState;
}
export declare const getEmptyStatusState: () => StatusState;
export declare const reducer: Reducer<StatusState>;

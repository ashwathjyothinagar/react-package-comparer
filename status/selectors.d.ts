import { StatusAppState } from './reducer';
export declare const getBlockingCalls: (state: StatusAppState) => number | undefined;
export declare const getMessages: (state: StatusAppState) => import("./reducers/messages").StatusMessagesState;
export declare const getActiveSpinners: (state: StatusAppState) => string[];

export declare type BlockingCallsState = number | undefined;
export declare const getBlockingCallsInitialState: () => number | undefined;
export declare const blockingCallsReducer: import("redux-actions").Reducer<number | undefined, number>;

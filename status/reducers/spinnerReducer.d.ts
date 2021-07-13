import { Action } from 'redux-actions';
export interface SpinnerState {
    activated: string[];
    deactivated: string[];
}
export declare const getEmptySpinnerState: () => SpinnerState;
export declare const spinnerReducer: (state: SpinnerState | undefined, action: Action<string>) => SpinnerState;

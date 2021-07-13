import { SagaIterator } from 'redux-saga';
import * as actions from './actions';
import { Action } from 'redux-actions';
export declare function startBlockingCall(): SagaIterator;
export declare function showMessage(action: Action<actions.ShowMessageRequest>): SagaIterator;
export declare function startSpinner(action: Action<string>): SagaIterator;
export declare const sagas: any[];

import { Action } from 'redux-actions';
import { CapturePage } from './models';
import { SagaIterator } from 'redux-saga';
export declare function capturePage(action: Action<CapturePage>): SagaIterator;
export declare function watchCapturePage(): SagaIterator;
export declare const sagas: SagaIterator[];

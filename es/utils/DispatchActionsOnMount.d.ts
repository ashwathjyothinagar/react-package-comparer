import React from 'react';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';
export interface DispatchAndActions {
    dispatch: Dispatch<any>;
    actionList: Array<Action<any>>;
}
export declare const dispatchActionsOnMount: <P extends DispatchAndActions>(ComponentClass: React.ComponentType<any>) => React.ComponentType<P>;

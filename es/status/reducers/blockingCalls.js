var _a;
import { handleActions } from 'redux-actions';
import * as t from '../actionTypes';
export var getBlockingCallsInitialState = function () { return 0; };
export var blockingCallsReducer = handleActions((_a = {},
    _a[t.INCREMENT_BLOCKING_COUNTER] = function (state) { return state + 1; },
    _a[t.STOP_BLOCKING_CALL] = function (state) { return state - 1; },
    _a), getBlockingCallsInitialState());
//# sourceMappingURL=blockingCalls.js.map
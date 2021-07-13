import { combineReducers } from 'redux';
import { blockingCallsReducer, messagesReducer, spinnerReducer } from './reducers';
import { getEmptySpinnerState } from './reducers/spinnerReducer';
export var getEmptyStatusState = function () { return ({
    messages: [],
    blockingCalls: 0,
    spinner: getEmptySpinnerState(),
}); };
export var reducer = combineReducers({
    messages: messagesReducer,
    blockingCalls: blockingCallsReducer,
    spinner: spinnerReducer,
});
//# sourceMappingURL=reducer.js.map
import { createAction } from 'redux-actions';
import * as t from './actionTypes';
export var showMessage = createAction(t.SHOW_MESSAGE);
export var hideMessage = createAction(t.HIDE_MESSAGE);
export var startBlockingCall = createAction(t.START_BLOCKING_CALL);
export var stopBlockingCall = createAction(t.STOP_BLOCKING_CALL);
export var incrementBlockingCounter = createAction(t.INCREMENT_BLOCKING_COUNTER);
export var startSpinnerFor = createAction(t.START_SPINNER);
export var stopSpinnerFor = createAction(t.STOP_SPINNER);
export var addSpinnerFor = createAction(t.ADD_SPINNER);
//# sourceMappingURL=actions.js.map
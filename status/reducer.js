"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
var spinnerReducer_1 = require("./reducers/spinnerReducer");
exports.getEmptyStatusState = function () { return ({
    messages: [],
    blockingCalls: 0,
    spinner: spinnerReducer_1.getEmptySpinnerState(),
}); };
exports.reducer = redux_1.combineReducers({
    messages: reducers_1.messagesReducer,
    blockingCalls: reducers_1.blockingCallsReducer,
    spinner: reducers_1.spinnerReducer,
});
//# sourceMappingURL=reducer.js.map
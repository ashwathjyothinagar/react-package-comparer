"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
var t = __importStar(require("./actionTypes"));
exports.showMessage = redux_actions_1.createAction(t.SHOW_MESSAGE);
exports.hideMessage = redux_actions_1.createAction(t.HIDE_MESSAGE);
exports.startBlockingCall = redux_actions_1.createAction(t.START_BLOCKING_CALL);
exports.stopBlockingCall = redux_actions_1.createAction(t.STOP_BLOCKING_CALL);
exports.incrementBlockingCounter = redux_actions_1.createAction(t.INCREMENT_BLOCKING_COUNTER);
exports.startSpinnerFor = redux_actions_1.createAction(t.START_SPINNER);
exports.stopSpinnerFor = redux_actions_1.createAction(t.STOP_SPINNER);
exports.addSpinnerFor = redux_actions_1.createAction(t.ADD_SPINNER);
//# sourceMappingURL=actions.js.map
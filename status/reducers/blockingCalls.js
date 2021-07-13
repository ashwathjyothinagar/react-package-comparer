"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var redux_actions_1 = require("redux-actions");
var t = __importStar(require("../actionTypes"));
exports.getBlockingCallsInitialState = function () { return 0; };
exports.blockingCallsReducer = redux_actions_1.handleActions((_a = {},
    _a[t.INCREMENT_BLOCKING_COUNTER] = function (state) { return state + 1; },
    _a[t.STOP_BLOCKING_CALL] = function (state) { return state - 1; },
    _a), exports.getBlockingCallsInitialState());
//# sourceMappingURL=blockingCalls.js.map
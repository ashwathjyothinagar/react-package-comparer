var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
import { delay } from 'redux-saga';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import * as t from './actionTypes';
import { incrementBlockingCounter, addSpinnerFor } from './actions';
import { getBlockingCalls, getActiveSpinners, getMessages } from './selectors';
import * as actions from './actions';
export function startBlockingCall() {
    var counter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, select(getBlockingCalls)];
            case 1:
                counter = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, , 5, 7]);
                if (!(counter === 0)) return [3, 4];
                return [4, call(delay, 500)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [3, 7];
            case 5: return [4, put(incrementBlockingCounter())];
            case 6:
                _a.sent();
                return [7];
            case 7: return [2];
        }
    });
}
export function showMessage(action) {
    var e_1, _a, message, messages, messagesToHide, messagesToHide_1, messagesToHide_1_1, messageToHide, hideMessageAction, e_1_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                message = action.payload;
                if (!!['error', 'warning'].includes(action.payload.type)) return [3, 10];
                return [4, call(delay, 3000)];
            case 1:
                _b.sent();
                return [4, select(getMessages)];
            case 2:
                messages = _b.sent();
                messagesToHide = messages.filter(function (x) {
                    return x.type === message.type &&
                        x.message === message.message;
                });
                _b.label = 3;
            case 3:
                _b.trys.push([3, 8, 9, 10]);
                messagesToHide_1 = __values(messagesToHide), messagesToHide_1_1 = messagesToHide_1.next();
                _b.label = 4;
            case 4:
                if (!!messagesToHide_1_1.done) return [3, 7];
                messageToHide = messagesToHide_1_1.value;
                hideMessageAction = { id: messageToHide.id };
                return [4, put(actions.hideMessage(hideMessageAction))];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6:
                messagesToHide_1_1 = messagesToHide_1.next();
                return [3, 4];
            case 7: return [3, 10];
            case 8:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3, 10];
            case 9:
                try {
                    if (messagesToHide_1_1 && !messagesToHide_1_1.done && (_a = messagesToHide_1.return)) _a.call(messagesToHide_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7];
            case 10: return [2];
        }
    });
}
export function startSpinner(action) {
    var payload, spinners;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) return [3, 5];
                return [4, select(getActiveSpinners)];
            case 1:
                spinners = _a.sent();
                if (!(spinners.length === 0)) return [3, 3];
                return [4, call(delay, 500)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [4, put(addSpinnerFor(payload))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2];
        }
    });
}
function watchStartBlockingCall() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, takeLatest(t.START_BLOCKING_CALL, startBlockingCall)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}
function watchShowMessage() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, takeLatest(t.SHOW_MESSAGE, showMessage)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}
function watchStartSpinner() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, takeEvery(t.START_SPINNER, startSpinner)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}
export var sagas = [
    watchStartBlockingCall(),
    watchShowMessage(),
    watchStartSpinner(),
];
//# sourceMappingURL=sagas.js.map
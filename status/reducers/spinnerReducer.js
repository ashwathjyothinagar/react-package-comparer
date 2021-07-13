"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var t = __importStar(require("../actionTypes"));
exports.getEmptySpinnerState = function () { return ({
    activated: [],
    deactivated: [],
}); };
exports.spinnerReducer = function (state, action) {
    if (state === void 0) { state = exports.getEmptySpinnerState(); }
    switch (action.type) {
        case t.ADD_SPINNER: {
            var payload = action.payload;
            var deactivatedIndex = state.deactivated.indexOf(payload);
            if (deactivatedIndex !== -1) {
                var deactivated = __spread(state.deactivated);
                deactivated.splice(deactivatedIndex, 1);
                return __assign({}, state, { deactivated: deactivated });
            }
            var activatedIndex = state.activated.indexOf(payload);
            if (activatedIndex === -1) {
                return __assign({}, state, { activated: __spread(state.activated, [payload]) });
            }
            return __assign({}, state);
        }
        case t.STOP_SPINNER: {
            var payload = action.payload;
            var activatedIndex = state.activated.indexOf(payload);
            if (activatedIndex !== -1) {
                var activated = __spread(state.activated);
                activated.splice(activatedIndex, 1);
                return __assign({}, state, { activated: activated });
            }
            var deactivatedIndex = state.deactivated.indexOf(payload);
            if (deactivatedIndex === -1) {
                return __assign({}, state, { deactivated: __spread(state.deactivated, [payload]) });
            }
            return __assign({}, state);
        }
    }
    return state;
};
//# sourceMappingURL=spinnerReducer.js.map
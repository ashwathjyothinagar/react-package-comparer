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
var _a;
var redux_actions_1 = require("redux-actions");
var t = __importStar(require("../actionTypes"));
var shortid_1 = require("shortid");
var initialState = [];
exports.messagesReducer = redux_actions_1.handleActions((_a = {},
    _a[t.SHOW_MESSAGE] = function (state, action) {
        return overwriteMessages(__spread(state), __assign({}, action.payload, { id: shortid_1.generate() }));
    },
    _a[t.HIDE_MESSAGE] = function (state, action) {
        return state.filter(function (msg) { return msg.id !== action.payload.id; });
    },
    _a), initialState);
var overwriteMessages = function (messages, newMessage) {
    var itemToReplace = messages.filter(function (message) { return (message.message === newMessage.message && message.type === newMessage.type) || (message.forceOverwriteKey !== undefined &&
        newMessage.forceOverwriteKey !== undefined &&
        message.forceOverwriteKey === newMessage.forceOverwriteKey); });
    if (itemToReplace.length !== 0) {
        messages[messages.indexOf(itemToReplace[0])] = newMessage;
    }
    else {
        messages = __spread(messages, [newMessage]);
    }
    return messages;
};
//# sourceMappingURL=messages.js.map
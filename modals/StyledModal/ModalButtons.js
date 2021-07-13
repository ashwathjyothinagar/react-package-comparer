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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = require("../../controls/Button");
exports.ModalButtons = function (_a) {
    var _b = _a.additionalButtons, additionalButtons = _b === void 0 ? [] : _b, closeCallback = _a.closeCallback;
    return react_1.default.createElement("div", { className: "buttons" },
        react_1.default.createElement(Button_1.Button, { styleType: "basic", onClick: closeCallback, size: 'large' }, "Close"),
        additionalButtons.map(function (button) {
            return react_1.default.createElement(Button_1.Button, __assign({ key: button.text }, button), button.text);
        }));
};
exports.ModalButtons.displayName = 'ModalButtons';
//# sourceMappingURL=ModalButtons.js.map
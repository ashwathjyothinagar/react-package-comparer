"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.Callout = function (_a) {
    var type = _a.type, leadInText = _a.leadInText, onClose = _a.onClose, children = _a.children, className = _a.className;
    return react_1.default.createElement("div", { className: "callout-" + type + " callout" + (className ? " " + className : '') },
        leadInText && react_1.default.createElement("span", { className: "lead-in" + (className ? " " + className + "__lead-in" : '') }, leadInText),
        react_1.default.createElement("div", { className: "callout-content" + (className ? " " + className + "__content" : '') }, children),
        onClose && react_1.default.createElement("button", { onClick: onClose, className: "close" + (className ? " " + className + "__close" : '') }, "\u2573"));
};
exports.Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map
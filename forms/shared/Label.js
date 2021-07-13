"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.Label = function (_a) {
    var name = _a.name, required = _a.required, text = _a.text, _b = _a.parentElementType, parentElementType = _b === void 0 ? 'div' : _b;
    return parentElementType === 'fieldset'
        ? react_1.default.createElement(react_1.default.Fragment, null, text && react_1.default.createElement("legend", { className: "form-group-label", id: name + "_label" },
            text,
            required && react_1.default.createElement("span", { className: "required-message" }, "* required")))
        : react_1.default.createElement(react_1.default.Fragment, null, text && react_1.default.createElement("label", { htmlFor: name },
            text,
            required && react_1.default.createElement("span", { className: "required-message" }, "* required")));
};
exports.Label.displayName = 'Label';
//# sourceMappingURL=Label.js.map
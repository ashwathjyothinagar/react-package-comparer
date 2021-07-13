"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.ErrorMessage = function (_a) {
    var touched = _a.touched, error = _a.error;
    return react_1.default.createElement(react_1.default.Fragment, null, touched && error && react_1.default.createElement("span", { className: "form-error-message" }, error));
};
exports.ErrorMessage.displayName = 'ErrorMessage';
//# sourceMappingURL=ErrorMessage.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.Button = function (_a) {
    var onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? 'button' : _c, size = _a.size, styleType = _a.styleType, form = _a.form, styles = _a.styles;
    var buttonClasses = "imod-btn imod-btn-" + styleType + " imod-btn-" + size;
    return (react_1.default.createElement("button", { onClick: onClick, disabled: disabled, type: type, className: buttonClasses, form: form, style: styles }, children));
};
exports.Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.InputField = function (_a) {
    var name = _a.name, addonAfter = _a.addonAfter, addonBefore = _a.addonBefore, type = _a.type, placeholder = _a.placeholder, value = _a.value, helpText = _a.helpText, disabled = _a.disabled, otherProps = __rest(_a, ["name", "addonAfter", "addonBefore", "type", "placeholder", "value", "helpText", "disabled"]);
    return react_1.default.createElement("div", { className: addonAfter || addonBefore ? 'input-group' : undefined },
        addonBefore && react_1.default.createElement("div", { className: "input-group-addon" }, addonBefore),
        react_1.default.createElement("input", __assign({ id: name, disabled: disabled }, otherProps, { value: value, name: name, placeholder: placeholder, type: type, className: "form-control" })),
        addonAfter && react_1.default.createElement("div", { className: "input-group-addon" }, addonAfter));
};
exports.InputField.displayName = 'InputField';
//# sourceMappingURL=InputField.js.map
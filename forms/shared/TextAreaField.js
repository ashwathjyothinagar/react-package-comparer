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
var functions_1 = require("./functions");
exports.TextAreaField = function (_a) {
    var name = _a.name, value = _a.value, _b = _a.required, required = _b === void 0 ? false : _b, placeholder = _a.placeholder, height = _a.height, otherProps = __rest(_a, ["name", "value", "required", "placeholder", "height"]);
    var style = height ?
        {
            height: height,
        }
        : undefined;
    return react_1.default.createElement("textarea", __assign({}, otherProps, { value: value, id: functions_1.generateId(name), name: name, placeholder: placeholder, className: "form-control", style: style }));
};
exports.TextAreaField.displayName = 'TextAreaField';
//# sourceMappingURL=TextAreaField.js.map
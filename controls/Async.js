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
var LoadingSpinner_1 = require("./LoadingSpinner");
var warning_1 = __importDefault(require("warning"));
exports.Async = function (props) {
    var children = react_1.default.Children.toArray(props.children);
    var validChildren = children.length !== 0;
    var isLoading = props.isLoading, spinnerContext = props.spinnerContext, otherProps = __rest(props, ["isLoading", "spinnerContext"]);
    var className = (props.className ? props.className + " " : '') + "async-field-container" + (isLoading ? ' async-field-loading' : '');
    warning_1.default(validChildren, 'You must pass a child component when using Async');
    return react_1.default.createElement("div", __assign({}, otherProps, { className: className }),
        isLoading && react_1.default.createElement(LoadingSpinner_1.LoadingSpinner, { context: spinnerContext || 'relative' }),
        validChildren
            ? props.children
            : react_1.default.createElement("div", null, "You forgot to pass your component as a child of Async"));
};
exports.Async.defaultProps = {
    isLoading: true,
};
exports.Async.displayName = 'Async';
//# sourceMappingURL=Async.js.map
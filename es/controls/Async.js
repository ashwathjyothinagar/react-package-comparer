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
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import warning from 'warning';
export var Async = function (props) {
    var children = React.Children.toArray(props.children);
    var validChildren = children.length !== 0;
    var isLoading = props.isLoading, spinnerContext = props.spinnerContext, otherProps = __rest(props, ["isLoading", "spinnerContext"]);
    var className = (props.className ? props.className + " " : '') + "async-field-container" + (isLoading ? ' async-field-loading' : '');
    warning(validChildren, 'You must pass a child component when using Async');
    return React.createElement("div", __assign({}, otherProps, { className: className }),
        isLoading && React.createElement(LoadingSpinner, { context: spinnerContext || 'relative' }),
        validChildren
            ? props.children
            : React.createElement("div", null, "You forgot to pass your component as a child of Async"));
};
Async.defaultProps = {
    isLoading: true,
};
Async.displayName = 'Async';
//# sourceMappingURL=Async.js.map
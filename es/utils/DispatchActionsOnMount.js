var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
export var dispatchActionsOnMount = function (ComponentClass) {
    return (function (_super) {
        __extends(DispatchingWrapper, _super);
        function DispatchingWrapper(props) {
            var _this = _super.call(this, props) || this;
            var dispatch = props.dispatch, actionList = props.actionList;
            _this.dispatch = dispatch;
            _this.actionList = actionList;
            return _this;
        }
        DispatchingWrapper.prototype.componentDidMount = function () {
            var _this = this;
            this.actionList.forEach(function (a) { return _this.dispatch(a); });
        };
        DispatchingWrapper.prototype.render = function () {
            var _a = this.props, dispatch = _a.dispatch, actionList = _a.actionList, propsWithoutStuffs = __rest(_a, ["dispatch", "actionList"]);
            return React.createElement(ComponentClass, __assign({}, propsWithoutStuffs));
        };
        return DispatchingWrapper;
    }(React.Component));
};
//# sourceMappingURL=DispatchActionsOnMount.js.map
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
exports.HiddenListTableColumn = function (_a, ref) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, styles = _a.styles, isDragHandle = _a.isDragHandle, otherProps = __rest(_a, ["children", "className", "styles", "isDragHandle"]);
    return react_1.default.createElement("li", __assign({ className: "list-table-column" + (className ? " " + className : ''), style: styles, ref: ref }, otherProps), children);
};
exports.ListTableColumn = react_1.default.forwardRef(exports.HiddenListTableColumn);
exports.ListTableColumn.displayName = 'ListTableColumn';
//# sourceMappingURL=ListTableColumn.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.LinkButton = function (_a) {
    var children = _a.children, size = _a.size, style = _a.style, to = _a.to, isAbsolute = _a.isAbsolute, styles = _a.styles;
    var buttonClasses = "imod-btn imod-btn-" + style + " imod-btn-" + size;
    return (isAbsolute ?
        react_1.default.createElement("a", { href: to, className: buttonClasses, style: styles }, children)
        :
            react_1.default.createElement(react_router_dom_1.NavLink, { className: buttonClasses, to: to, activeStyle: styles }, children));
};
exports.LinkButton.displayName = 'LinkButton';
//# sourceMappingURL=LinkButton.js.map
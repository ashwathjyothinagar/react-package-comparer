"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = __importDefault(require("react-helmet"));
exports.PageHeader = function (_a) {
    var title = _a.title, className = _a.className;
    return react_1.default.createElement("div", null,
        react_1.default.createElement(react_helmet_1.default, { title: title }),
        react_1.default.createElement("h1", { className: className }, title));
};
exports.PageHeader.displayName = 'PageHeader';
//# sourceMappingURL=PageHeader.js.map
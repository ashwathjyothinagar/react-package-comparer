"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.GlobalBreadcrumbs = function (_a) {
    var links = _a.links;
    return react_1.default.createElement("div", { className: "global-breadcrumbs" }, links.map(function (link) { return react_1.default.createElement("a", { key: link.text, href: link.url }, link.text); }));
};
exports.GlobalBreadcrumbs.displayName = 'GlobalBreadcrumbs';
//# sourceMappingURL=GlobalBreadcrumbs.js.map
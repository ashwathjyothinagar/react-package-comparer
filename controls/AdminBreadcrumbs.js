"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.AdminBreadcrumbs = function (_a) {
    var breadcrumbs = _a.breadcrumbs;
    return react_1.default.createElement("ul", { className: "admin-breadcrumb" }, breadcrumbs.map(function (breadcrumb) { return react_1.default.createElement("li", { key: breadcrumb }, breadcrumb); }));
};
exports.AdminBreadcrumbs.displayName = 'AdminBreadcrumbs';
//# sourceMappingURL=AdminBreadcrumbs.js.map
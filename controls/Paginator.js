"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_paginate_1 = __importDefault(require("react-paginate"));
exports.Paginator = function (_a) {
    var pageCount = _a.pageCount, pageClickCallback = _a.pageClickCallback, pageIndex = _a.pageIndex, _b = _a.pageRangeDisplayed, pageRangeDisplayed = _b === void 0 ? 5 : _b, _c = _a.marginPagesDisplayed, marginPagesDisplayed = _c === void 0 ? 2 : _c;
    return react_1.default.createElement("div", { className: "imod-paginator" },
        react_1.default.createElement(react_paginate_1.default, { previousLabel: react_1.default.createElement("i", { className: "fa fa-angle-left" }), nextLabel: react_1.default.createElement("i", { className: "fa fa-angle-right" }), breakLabel: react_1.default.createElement("a", { href: "" }, "..."), pageCount: pageCount, marginPagesDisplayed: marginPagesDisplayed, pageRangeDisplayed: pageRangeDisplayed, onPageChange: pageClickCallback, pageLinkClassName: 'pagerLink', previousLinkClassName: 'pagerLink', nextLinkClassName: 'pagerLink', activeClassName: 'selected', forcePage: pageIndex }));
};
exports.Paginator.displayName = 'Paginator';
//# sourceMappingURL=Paginator.js.map
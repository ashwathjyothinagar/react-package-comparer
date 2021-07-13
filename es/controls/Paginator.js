import React from 'react';
import ReactPaginate from 'react-paginate';
export var Paginator = function (_a) {
    var pageCount = _a.pageCount, pageClickCallback = _a.pageClickCallback, pageIndex = _a.pageIndex, _b = _a.pageRangeDisplayed, pageRangeDisplayed = _b === void 0 ? 5 : _b, _c = _a.marginPagesDisplayed, marginPagesDisplayed = _c === void 0 ? 2 : _c;
    return React.createElement("div", { className: "imod-paginator" },
        React.createElement(ReactPaginate, { previousLabel: React.createElement("i", { className: "fa fa-angle-left" }), nextLabel: React.createElement("i", { className: "fa fa-angle-right" }), breakLabel: React.createElement("a", { href: "" }, "..."), pageCount: pageCount, marginPagesDisplayed: marginPagesDisplayed, pageRangeDisplayed: pageRangeDisplayed, onPageChange: pageClickCallback, pageLinkClassName: 'pagerLink', previousLinkClassName: 'pagerLink', nextLinkClassName: 'pagerLink', activeClassName: 'selected', forcePage: pageIndex }));
};
Paginator.displayName = 'Paginator';
//# sourceMappingURL=Paginator.js.map
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
import React, { Component } from 'react';
import { ListTableRow } from './ListTableRow';
import { ListTableColumn } from './ListTableColumn';
import { ListTableInputColumn } from './ListTableInputColumn';
import { ListTableColumnHeader } from './ListTableColumnHeader';
import { ListTableColumnFooter } from './ListTableColumnFooter';
import { DraggableListTable } from './DraggableListTable';
import { DragHandleColumn } from './DragHandleColumn';
import { DragHandleColumnHeader } from './DragHandleColumnHeader';
import { DragHandleColumnFooter } from './DragHandleColumnFooter';
var ListTable = (function (_super) {
    __extends(ListTable, _super);
    function ListTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListTable.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, styles = _a.styles, label = _a.label, otherProps = __rest(_a, ["children", "className", "styles", "label"]);
        var fullClass = 'list-table-container';
        if (className) {
            fullClass += " " + className;
        }
        var header;
        if (label) {
            header = React.createElement("label", null, label);
        }
        return this.props.isDraggable ?
            React.createElement(DraggableListTable, __assign({}, this.props))
            :
                React.createElement("div", { className: fullClass, ref: otherProps.forwardRef },
                    header,
                    React.createElement("div", { className: "list-table", style: styles }, children));
    };
    ListTable.Row = ListTableRow;
    ListTable.Column = ListTableColumn;
    ListTable.InputColumn = ListTableInputColumn;
    ListTable.ColumnHeader = ListTableColumnHeader;
    ListTable.ColumnFooter = ListTableColumnFooter;
    ListTable.DragHandleColumn = DragHandleColumn;
    ListTable.DragHandleColumnHeader = DragHandleColumnHeader;
    ListTable.DragHandleColumnFooter = DragHandleColumnFooter;
    return ListTable;
}(Component));
export { ListTable };
//# sourceMappingURL=index.js.map
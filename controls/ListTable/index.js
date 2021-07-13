"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ListTableRow_1 = require("./ListTableRow");
var ListTableColumn_1 = require("./ListTableColumn");
var ListTableInputColumn_1 = require("./ListTableInputColumn");
var ListTableColumnHeader_1 = require("./ListTableColumnHeader");
var ListTableColumnFooter_1 = require("./ListTableColumnFooter");
var DraggableListTable_1 = require("./DraggableListTable");
var DragHandleColumn_1 = require("./DragHandleColumn");
var DragHandleColumnHeader_1 = require("./DragHandleColumnHeader");
var DragHandleColumnFooter_1 = require("./DragHandleColumnFooter");
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
            header = react_1.default.createElement("label", null, label);
        }
        return this.props.isDraggable ?
            react_1.default.createElement(DraggableListTable_1.DraggableListTable, __assign({}, this.props))
            :
                react_1.default.createElement("div", { className: fullClass, ref: otherProps.forwardRef },
                    header,
                    react_1.default.createElement("div", { className: "list-table", style: styles }, children));
    };
    ListTable.Row = ListTableRow_1.ListTableRow;
    ListTable.Column = ListTableColumn_1.ListTableColumn;
    ListTable.InputColumn = ListTableInputColumn_1.ListTableInputColumn;
    ListTable.ColumnHeader = ListTableColumnHeader_1.ListTableColumnHeader;
    ListTable.ColumnFooter = ListTableColumnFooter_1.ListTableColumnFooter;
    ListTable.DragHandleColumn = DragHandleColumn_1.DragHandleColumn;
    ListTable.DragHandleColumnHeader = DragHandleColumnHeader_1.DragHandleColumnHeader;
    ListTable.DragHandleColumnFooter = DragHandleColumnFooter_1.DragHandleColumnFooter;
    return ListTable;
}(react_1.Component));
exports.ListTable = ListTable;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var warning_1 = __importDefault(require("warning"));
var hasSingleChildFieldWithName = function (children, name) {
    return children.length === 1 && children[0].props && (children[0].props.component.displayName || children[0].props.component.name ||
        (children[0].props.component.constructor && children[0].props.component.constructor.name) || 'Component') === name;
};
exports.ListTableInputColumn = function (_a) {
    var children = _a.children, styles = _a.styles;
    var childrenCollection = react_1.default.Children.toArray(children);
    var validChildren = childrenCollection.length !== 0;
    warning_1.default(validChildren, 'You must pass a child component when using ListTableInputColumn');
    var inputClassName = hasSingleChildFieldWithName(childrenCollection, 'ColorPickerField') ? 'color-picker-column' : 'input-column';
    return react_1.default.createElement("li", { className: "list-table-column " + inputClassName, style: styles }, validChildren
        ? children
        : react_1.default.createElement("div", null, "You forgot to pass a child component when using ListTableInputColumn"));
};
exports.ListTableInputColumn.displayName = 'ListTableInputColumn';
//# sourceMappingURL=ListTableInputColumn.js.map
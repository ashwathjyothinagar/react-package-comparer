import React from 'react';
import warning from 'warning';
var hasSingleChildFieldWithName = function (children, name) {
    return children.length === 1 && children[0].props && (children[0].props.component.displayName || children[0].props.component.name ||
        (children[0].props.component.constructor && children[0].props.component.constructor.name) || 'Component') === name;
};
export var ListTableInputColumn = function (_a) {
    var children = _a.children, styles = _a.styles;
    var childrenCollection = React.Children.toArray(children);
    var validChildren = childrenCollection.length !== 0;
    warning(validChildren, 'You must pass a child component when using ListTableInputColumn');
    var inputClassName = hasSingleChildFieldWithName(childrenCollection, 'ColorPickerField') ? 'color-picker-column' : 'input-column';
    return React.createElement("li", { className: "list-table-column " + inputClassName, style: styles }, validChildren
        ? children
        : React.createElement("div", null, "You forgot to pass a child component when using ListTableInputColumn"));
};
ListTableInputColumn.displayName = 'ListTableInputColumn';
//# sourceMappingURL=ListTableInputColumn.js.map
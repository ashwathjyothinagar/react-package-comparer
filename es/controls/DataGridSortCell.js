import React from 'react';
import { DataGridCell } from './DataGridCell';
export var DataGridSortCell = function (_a) {
    var width = _a.width, handleSortUp = _a.handleSortUp, handleSortDown = _a.handleSortDown, position = _a.position;
    return React.createElement(DataGridCell, { widthType: { kind: 'width', width: width }, className: "sort-cell" },
        React.createElement("div", { className: "sort-buttons" },
            position === 'first' ? React.createElement("span", { className: "sort-up disabled" }) : React.createElement("span", { className: "sort-up", onClick: handleSortUp }),
            position === 'last' ? React.createElement("span", { className: "sort-down disabled" }) : React.createElement("span", { className: "sort-down", onClick: handleSortDown })));
};
DataGridSortCell.displayName = 'DataGridSortCell';
//# sourceMappingURL=DataGridSortCell.js.map
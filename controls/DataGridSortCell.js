"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DataGridCell_1 = require("./DataGridCell");
exports.DataGridSortCell = function (_a) {
    var width = _a.width, handleSortUp = _a.handleSortUp, handleSortDown = _a.handleSortDown, position = _a.position;
    return react_1.default.createElement(DataGridCell_1.DataGridCell, { widthType: { kind: 'width', width: width }, className: "sort-cell" },
        react_1.default.createElement("div", { className: "sort-buttons" },
            position === 'first' ? react_1.default.createElement("span", { className: "sort-up disabled" }) : react_1.default.createElement("span", { className: "sort-up", onClick: handleSortUp }),
            position === 'last' ? react_1.default.createElement("span", { className: "sort-down disabled" }) : react_1.default.createElement("span", { className: "sort-down", onClick: handleSortDown })));
};
exports.DataGridSortCell.displayName = 'DataGridSortCell';
//# sourceMappingURL=DataGridSortCell.js.map
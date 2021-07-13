"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.DataGridCell = function (_a) {
    var children = _a.children, widthType = _a.widthType, className = _a.className, onClick = _a.onClick, _b = _a.isColumnHeader, isColumnHeader = _b === void 0 ? false : _b;
    var style = {};
    var fullClassName = 'data-grid-cell';
    if (isColumnHeader) {
        fullClassName += ' column-header';
    }
    if (className) {
        fullClassName += " " + className;
    }
    switch (widthType.kind) {
        case 'width':
            style.flexGrow = widthType.width;
            break;
        case 'fixedWidth':
            style.flexGrow = 0;
            style.flexBasis = widthType.fixedWidth;
            break;
    }
    return react_1.default.createElement("li", { className: fullClassName, style: style, onClick: onClick }, children);
};
exports.DataGridCell.displayName = 'DataGridCell';
//# sourceMappingURL=DataGridCell.js.map